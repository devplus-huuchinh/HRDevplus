<?php

namespace App\Repositories;

use App\Models\Technique;

class TechniqueRepo extends EloquentRepo
{
   /**
    * @inheritDoc
    */
   public function getModel()
   {
      return Technique::class;
   }

   public function getAll()
   {
      return $this->model->get();
   }
}
