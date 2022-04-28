<?php

namespace App\Services;

use App\Repositories\CampaignRepo;
use App\Repositories\CampaignTechniqueRepo;
use App\Repositories\PositionCampaignRepo;
use Illuminate\Http\Request;

class CampaignService
{
    private $campaignRepo;
    private $campaignTechniqueRepo;
    private $positionCampaignRepo;

    public function __construct(CampaignRepo $campaignRepo, CampaignTechniqueRepo $campaignTechniqueRepo, PositionCampaignRepo $positionCampaignRepo)
    {
        $this->campaignRepo = $campaignRepo;
        $this->campaignTechniqueRepo = $campaignTechniqueRepo;
        $this->positionCampaignRepo = $positionCampaignRepo;
    }

    public function findAllHr($params)
    {
        $limit = $params['limit'] ?? 10;
        $offset = $params['offset'] ?? 0;
        return $this->campaignRepo->findAllHr((int)$offset, (int)$limit);
    }

    // public function create($attributes)
    // {
    //     // try{
    //     //     return $this->campaignRepo->create($attributes);
    //     // }
    //     // catch (\Throwable $error) {
    //     //     return response()->json(
    //     //         [
    //     //         'message' => 'Getting_data_fail',
    //     //         'error' => $error,
    //     //         ]
    //     //     );
    //     // }
    //     // // return $this->campaignRepo->create($attributes);
    //     return $this->campaignRepo->create($attributes);
    // }


    public function create($request)
    {
        $user = $request->user();
        $data = [
            "name" => $request['name'],
            "address" => $request['address'],
            "start_date" => $request['start_date'],
            "end_date" => $request['end_date'],
            "is_active" => true,
            "description" => $request['description'],
            "image_url" => $request['image_url'],
            "quantity" => $request['quantity'],
            "user_id" => $user['id'],
        ];
        return $this->campaignRepo->create($data);
    }

    public function findOne($id)
    {
        return $this->campaignRepo->find($id);
    }

    public function findCampaignActive($id)
    {
        return $this->campaignRepo->findCampaign($id);
    }

    public function showCampaignDetail($id)
    {
        return $this->campaignRepo->showCampaign($id);
    }

    public function newCampaign_technique($id, $arr)
    {
        $arrData = [];
        foreach ($arr as $item) {
            array_push($arrData, ["campaign_id" => $id, "technique_id" => $item]);
        }
        return $this->campaignTechniqueRepo->createMulti($arrData);
    }

    public function newCampaign_position($id, $arr)
    {
        $arrData = [];
        foreach ($arr as $item) {
            array_push($arrData, ["campaign_id" => $id, "position_id" => $item]);
        }
        return $this->positionCampaignRepo->createMulti($arrData);
    }
}
