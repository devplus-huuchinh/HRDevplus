<?php

namespace App\Services;

use App\Repositories\TechniqueRepo;

/**
 * Class UserService
 *
 * @package App\Services
 */
class TechniqueService
{
   private $techniqueRepo;

   public function __construct(TechniqueRepo $techniqueRepo)
   {
      $this->techniqueRepo = $techniqueRepo;
   }

   public function getAllTechnique()
   {
      return $this->techniqueRepo->getAll();
   }
}
