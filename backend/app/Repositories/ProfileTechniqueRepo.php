<?php

namespace App\Repositories;

use App\Models\profile_technique;

class ProfileTechniqueRepo extends EloquentRepo
{
   /**
    * @inheritDoc
    */
   public function getModel()
   {
      return profile_technique::class;
   }

   public function createProfileTechnique($profileTechniqueFormData)
   {
      return $this->model->insert($profileTechniqueFormData);
   }
}
