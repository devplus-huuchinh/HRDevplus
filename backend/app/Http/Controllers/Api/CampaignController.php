<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\CampaignService;

class CampaignController extends Controller
{
    private $campaignService;

    // constructor
    public function __construct(CampaignService $campaignService)
    {
        $this->campaignService = $campaignService;
    }

    // show all campaign
    public function index(Request $request)
    {
         // dd('dasdads');
         $user = $request->user();
         try{
             return $this->campaignService->findAll($request->all());
         }
         catch (\Throwable $error) {
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