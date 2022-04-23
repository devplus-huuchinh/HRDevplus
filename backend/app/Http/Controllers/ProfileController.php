<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ProfileService;
use App\Repositories\ProfileRepo;

class ProfileController extends Controller
{
    private $ProfileService;
    private $ProfileRepo;
    public function __construct(ProfileService $profileService, ProfileRepo $profileRepo)
    {
        $this->ProfileService = $profileService;
        $this->ProfileRepo = $profileRepo;
    }


    public function All(Request $request)
    {
        try {
            $profiles = $this->ProfileService->getByCampaign($request->id);
            return response()->json($profiles);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'get_all_profile_error',
                'error' => $th,
            ], 500);
        }
    }
}
