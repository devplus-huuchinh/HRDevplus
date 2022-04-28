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

   public function createProfileTechnique($profileTechniqueFormData)
   {
      return $this->profileTechniqueRepo->createProfileTechnique($profileTechniqueFormData);
   }
}
