<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\ProfileTechniqueService;
use Composer\DependencyResolver\Request;

class ProfileTechniqueController extends Controller
{
   private $profileTechniqueService;

   public function __construct(ProfileTechniqueService $profileTechniqueService)
   {
      $this->profileTechniqueService = $profileTechniqueService;
   }

   // public function create(Request $request)
   // {
   //    return $this->profileTechniqueService->createProfileTechnique($request->technique);
   // }
}
