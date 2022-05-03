<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\CampaignRepo;
use App\Repositories\CampaignTechniqueRepo;
use App\Repositories\PositionCampaignRepo;
use App\Repositories\PositionRepo;
use App\Repositories\TechniqueRepo;
use Illuminate\Http\Request;
use App\Services\CampaignService;
use App\Services\ProfileService;
use App\Services\ProfileTechniqueService;
use App\Services\UserService;

class CampaignController extends Controller
{
    private $campaignService;
    private $positionRepo;
    private $techniqueRepo;
    private $profileService;
    private $profileTechniqueService;
    private $userService;
    private $campaignRepo;
    private $campaignTechniqueRepo;
    private $positionCampaignRepo;

    // constructor
    public function __construct(CampaignService $campaignService, TechniqueRepo $techniqueRepo, PositionRepo $positionRepo, ProfileService $profileService, ProfileTechniqueService $profileTechniqueService, UserService $userService, CampaignRepo $campaignRepo, CampaignTechniqueRepo $campaignTechniqueRepo, PositionCampaignRepo $positionCampaignRepo)
    {
        $this->campaignService = $campaignService;
        $this->positionRepo = $positionRepo;
        $this->techniqueRepo = $techniqueRepo;
        $this->profileService = $profileService;
        $this->profileTechniqueService = $profileTechniqueService;
        $this->userService = $userService;
        $this->campaignRepo = $campaignRepo;
        $this->campaignTechniqueRepo = $campaignTechniqueRepo;
        $this->positionCampaignRepo = $positionCampaignRepo;
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
        $createCampaignTechnique = $this->profileTechniqueService->createProfileTechnique($request->technique, $createCampaign->id);

        return response()->json([
            'createCampaign' => $createCampaign,
            'createCampaignTechnique' => $createCampaignTechnique,
        ]);
    }

    public function statistics(Request $request)
    {
        $allCampaigns = $this->campaignService->campaignStatistics($request->all());
        return response()->json($allCampaigns);
    }

    public function count()
    {
        $count = [
            'profiles' => $this->profileService->profileCount(),
            'campaigns' => $this->campaignService->campaignCount(),
            'users' => $this->userService->userCount(),
        ];
        return $count;
    }

    public function editInfo(Request $request)
    {
        // try {
        $campaignEdited = $this->campaignRepo->editInfo($request);
        $techniqueEdited = $this->campaignTechniqueRepo->updateTechniqueByCampaign($campaignEdited->id, $request->technique);
        $positionEdited = $this->positionCampaignRepo->updatePositionByCampaign($campaignEdited->id, $request->position);

        return response()->json($request);
        // } catch (\Throwable $th) {
        //     return response()->json(
        //         [
        //             'message' => 'edit_info_campaign_fail',
        //             'error' => $th,
        //         ],
        //         500
        //     );
        // }
    }

    public function editActive(Request $request)
    {
        // return response()->json([
        //     "id" => $request->id, "bool" => $request->isActive
        // ]);
        $editActive = $this->campaignRepo->editActive($request->id, $request->isActive);
        return response()->json(["message" => "success"]);
    }
}
