<?php

namespace App\Repositories;

use App\Models\Technique;
use App\Models\User;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;

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
