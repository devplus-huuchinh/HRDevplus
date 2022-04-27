<?php

namespace App\Repositories;

use App\Models\Position;

class PositionRepo extends EloquentRepo
{
   public function getModel()
   {
      return Position::class;
   }

   public function getAll()
   {
      return $this->model->get();
   }
}
