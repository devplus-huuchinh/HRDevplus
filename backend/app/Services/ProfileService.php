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
}
