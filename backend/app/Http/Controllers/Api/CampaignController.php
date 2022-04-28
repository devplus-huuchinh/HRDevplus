<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\CampaignService;
use App\Services\ProfileService;
use App\Services\ProfileTechniqueService;

class CampaignController extends Controller
{
    private $campaignService;
    private $profileService;
    private $profileTechniqueService;

    public function __construct(CampaignService $campaignService, ProfileService $profileService, ProfileTechniqueService $profileTechniqueService)
    {
        $this->campaignService = $campaignService;
        $this->profileService = $profileService;
        $this->profileTechniqueService = $profileTechniqueService;
    }

    public function index(Request $request)
    {
        return $this->campaignService->findAll($request->all());
    }

    public function findCampaignActive(Request $request)
    {
        try {
            $campaignActive = $this->campaignService->findCampaignActive($request->id);
            return response()->json($campaignActive);
        } catch (\Throwable $th) {
            return response()->json(
                [
                    'message' => 'show_campaign_active_fail',
                    'error' => $th,
                ],
                500
            );
        }
    }

    public function showCampaignDetail(Request $request)
    {
        try {
            $compaignDetail = $this->campaignService->showCampaignDetail($request->id);
            return response()->json($compaignDetail);
        } catch (\Throwable $th) {
            return response()->json(
                [
                    'message' => 'show_campaign_detail_fail',
                    'error' => $th,
                ],
                500
            );
        }
    }

    public function applyCampaign(Request $request)
    {
        $createCampaign = $this->profileService->create($request->all());

        $data = [];
        foreach ($request->technique as $i) {
            array_push($data, ["technique_id" => $i, "profile_id" => $createCampaign->id]);
        }

        $createCampaignTechnique = $this->profileTechniqueService->createProfileTechnique($data);

        return response()->json([
            'createCampaign' => $createCampaign,
            'createCampaignTechnique' => $createCampaignTechnique,
        ]);
    }
}
