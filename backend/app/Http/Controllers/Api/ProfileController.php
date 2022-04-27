<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\ProfileService;


class ProfileController extends Controller
{
    private $profileService;

    public function applyToCampaign(Request $request)
    {
        try {
            $profile = $this->profileService->applyToCampaign($request->id);
            return response()->json($profile);
        } catch (\Throwable $th) {
            return response()->json(
                [
                'message' => 'aplly_to_campaign_fail',
                'error' => $th,
                ], 500
            );
        }

    }
}