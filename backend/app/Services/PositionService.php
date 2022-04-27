<?php

namespace App\Services;

use App\Repositories\PositionRepo;

class PositionService
{
   private $positionRepo;

   public function __construct(PositionRepo $positionRepo)
   {
      $this->positionRepo = $positionRepo;
   }

   public function getAllPosition()
   {
      return $this->positionRepo->getAll();
   }
}
