<?php

namespace App\Services;

use App\Repositories\ProfileRepo;

class ProfileService
{
   private $profileRepo;

   public function __construct(ProfileRepo $profileRepo)
   {
      $this->profileRepo = $profileRepo;
   }

   public function getByCampaign($id)
   {
      return $this->profileRepo->getByCampaignId($id);
   }

   public function editProfileSer($request)
   {
      if ($request->field == 'step') {
         return $this->profileRepo->editStepById($request->data['id'], $request->data['value']);
      }
      if ($request->field == 'status') {
         return $this->profileRepo->editStatusById($request->data['id'], $request->data['value']);
      }
   }
   public function applyToCampaign($id)
   {
      return $this->campaignRepo->applyToCampaign($id);
   }

   public function create($profileFormData)
   {
      return $this->profileRepo->create($profileFormData);
   }

   public function profileStatistics($request)
   {
      $year = $request['year'] ?? date('Y');
      $allProfiles = $this->profileRepo->getProfileByYear($year);

      $reduceData = array_reduce($allProfiles, function ($acc, $item) {
         $month = $item['created_at']->format('F');
         $searchInArray = array_search($month, array_column($acc, 'month'));

         if (($searchInArray) !== false) {
            $acc[$searchInArray]['count']++;
            return $acc;
         };

         array_push($acc, [
            'count' => 1,
            'month' =>  $month,
         ]);

         return $acc;
      }, array());

      return $reduceData;
   }

   public function profileCount()
   {
      return $this->profileRepo->countProfiles();
   }
}
