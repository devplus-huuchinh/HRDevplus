<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\ProfileService;


class ProfileController extends Controller
{
    private $profileService;

    public function __construct(ProfileService $profileService)
    {
        $this->profileService = $profileService;
    }

    public function create(Request $request)
    {
        $createCampaign = $this->profileService->create($request->all());
        return response()->json($createCampaign);
    }
}
