<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\CampaignService;

class CampaignController extends Controller
{
    private $campaignService;

    public function __construct(CampaignService $campaignService)
    {
        $this->campaignService = $campaignService;
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
}
