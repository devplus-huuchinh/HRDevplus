<?php

namespace App\Services;

use App\Repositories\CampaignRepo;
use App\Repositories\ProfileRepo;

class ProfileService
{
   private $profileRepo;
   private $campaignRepo;

   public function __construct(ProfileRepo $profileRepo, CampaignRepo $campaignRepo)
   {
      $this->profileRepo = $profileRepo;
      $this->campaignRepo = $campaignRepo;
   }

   public function getByCampaign($id)
   {
      // return $this->profileRepo->getByCampaignId($id);
      return $this->campaignRepo->getByCampaignId($id);
   }

   // public function editProfileSer($request)
   // {
   //    if ($request->field == 'step') {
   //       return $this->profileRepo->editStepById($request->data['id'], $request->data['value']);
   //    }
   //    if ($request->field == 'status') {
   //       return $this->profileRepo->editStatusById($request->data['id'], $request->data['value']);
   //    }
   // }
   // public function applyToCampaign($id)
   // {
   //    return $this->campaignRepo->applyToCampaign($id);
   // }

   public function create($profileFormData)
   {
      return $this->profileRepo->create($profileFormData);
   }
}
