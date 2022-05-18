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
            $key = ProfileStep::getKeys();
            $value = ProfileStep::getValues();
            $status = [];
            for ($index = 0; $index < count($key); $index++) {
                array_push($status, ["key" => $key[$index], "value" => $value[$index]]);
            }
            return response()->json($status);
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
            $updated = $this->ProfileRepo->edit($request->id, $request->step, $request->status);
            return response()->json($updated);
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

    public function statistics(Request $request)
    {
        $allProfile = $this->ProfileService->profileStatistics($request->all());
        return response()->json($allProfile);
    }

    public function detail(Request $request)
    {

        $intId =  intval($request['id']);
        $profile = $this->ProfileRepo->getDetail($intId);
        return response()->json($profile);
    }
}
