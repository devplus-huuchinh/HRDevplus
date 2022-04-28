<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Services\ProfileService;
use App\Repositories\ProfileRepo;
use App\Enums\ProfileStatus;
use App\Enums\ProfileStep;
use App\Http\Controllers\Controller;

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
            $profiles = $this->ProfileService->getByCampaign($request->campaign_id);
            return response()->json($profiles);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'get_all_profile_error',
                'error' => $th,
            ], 500);
        }
    }

    public function dropdownlistData()
    {
        try {
            return response()->json([
                'status' => ProfileStatus::getKeys(),
                'step' => ProfileStep::getKeys(),
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'get_dropdownlist',
                'error' => $th,
            ], 500);
        }
    }

    public function editProfile(request $request)
    {
        try {
            $test = $this->ProfileService->editProfileSer($request);
            return response()->json($test);
            // return response()->json([
            //     'message' => 'edit_success',
            // ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'edit_profile_error',
                'error' => $th,
            ], 500);
        }
    }

    public function create(Request $request)
    {
        $createCampaign = $this->profileService->create($request->all());
        return response()->json($createCampaign);
    }
}
