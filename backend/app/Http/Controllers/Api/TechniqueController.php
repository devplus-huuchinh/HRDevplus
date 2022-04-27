<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\TechniqueService;

class TechniqueController extends Controller
{
    private $techniqueService;

    public function __construct(TechniqueService $techniqueService)
    {
        $this->techniqueService = $techniqueService;
    }

    public function index()
    {
        return $this->techniqueService->getAllTechnique();
    }
}
