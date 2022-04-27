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
         
         $user = $request->user();
         try{
             return $this->campaignService->findAllHr($request->all());
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

    public function store(Request $request)
    {   
         $test = $this->campaignService->create($request);
         return  response()->json($test);
        // dd($this->campaignService->findAll($request->all()));
        // $user = $request->user();
        // try{
        //     $data = $this->campaignService->create($request);
        //     $data->save();
        //     return $data;
        // }
        // catch (\Throwable $error) {
        //      return response()->json(
        //          [
        //          'message' => 'adding_data_fail',
        //          'error' => $error,
        //          ]
        //      );
        //  }
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
                ], 500
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
                ], 500
            );
        }
    }
}
