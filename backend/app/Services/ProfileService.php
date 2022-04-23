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
}
