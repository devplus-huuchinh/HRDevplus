<?php

namespace App\Services;

use App\Repositories\ProfileTechniqueRepo;

/**
 * Class UserService
 *
 * @package App\Services
 */
class ProfileTechniqueService
{
   private $profileTechniqueRepo;

   public function __construct(ProfileTechniqueRepo $profileTechniqueRepo)
   {
      $this->profileTechniqueRepo = $profileTechniqueRepo;
   }

   public function createProfileTechnique($profileTechniqueFormData, $campaign_id)
   {
      $data = [];
      foreach ($profileTechniqueFormData as $i) {
         array_push($data, ["technique_id" => $i, "profile_id" => $campaign_id]);
      }

      return $this->profileTechniqueRepo->createProfileTechnique($data);
   }
}
