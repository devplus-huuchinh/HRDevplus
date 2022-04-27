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
        return $this->campaignService->findCampaignActive($request->id);
    }

    public function sortCampaignByName(Request $request)
    {
        return $this->campaignService->findCampaignActive($request->id);
    }

    public function showCampaignDetail(Request $request)
    {
        return $this->campaignService->showCampaignDetail($request->id);
    }
}
