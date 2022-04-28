<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\CampaignRepo;
use App\Repositories\PositionRepo;
use App\Repositories\TechniqueRepo;
use Illuminate\Http\Request;
use App\Services\CampaignService;
use App\Services\ProfileService;
use App\Services\ProfileTechniqueService;


class CampaignController extends Controller
{
    private $campaignService;
    private $positionRepo;
    private $techniqueRepo;
    // constructor
    public function __construct(CampaignService $campaignService, TechniqueRepo $techniqueRepo, PositionRepo $positionRepo, ProfileService $profileService, ProfileTechniqueService $profileTechniqueService)
    {
        $this->campaignService = $campaignService;
        $this->positionRepo = $positionRepo;
        $this->techniqueRepo = $techniqueRepo;
        $this->profileService = $profileService;
        $this->profileTechniqueService = $profileTechniqueService;
    }

    // show all campaign
    public function index(Request $request)
    {

        $user = $request->user();
        try {
            return $this->campaignService->findAllHr($request->all());
        } catch (\Throwable $error) {
            return response()->json(
                [
                    'message' => 'Getting_data_fail',
                    'error' => $error,
                ]
            );
        }
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

    public function getDropList()
    {
        try {
            $position = $this->positionRepo->getAll();
            $technique = $this->techniqueRepo->getAll();
            return response()->json(['position' => $position, 'technique' => $technique]);
        } catch (\Throwable $th) {
            return response()->json(
                [
                    'message' => 'get_drop_list_fail',
                    'error' => $th,
                ],
                500
            );
        }
    }

    public function newCampaign(Request $request)
    {
        try {
            $newCampaign = $this->campaignService->create($request);
            $newCampaign_technique = $this->campaignService->newCampaign_technique($newCampaign['id'], $request['technique']);
            $newCampaign_position = $this->campaignService->newCampaign_position($newCampaign['id'], $request['position']);
            return response()->json($newCampaign_technique);
        } catch (\Throwable $th) {
            return response()->json(
                [
                    'message' => 'create_campaign_fail',
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
