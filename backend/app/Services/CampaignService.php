<?php

namespace App\Services;

use App\Repositories\CampaignRepo;
use Illuminate\Http\Request;

class CampaignService
{
    private $campaignRepo;

    public function __construct(CampaignRepo $campaignRepo)
    {
        $this->campaignRepo = $campaignRepo;
    }

    public function findAllHr($params)
    {
        $limit = $params['limit'] ?? 10;
        $offset = $params['offset'] ?? 0;
        return $this->campaignRepo->findAllHr((int)$offset, (int)$limit);
    }

    public function create($attributes)
    {
        try{
            return $this->campaignRepo->create($attributes);
        }
        catch (\Throwable $error) {
            return response()->json(
                [
                'message' => 'Getting_data_fail',
                'error' => $error,
                ]
            );
        }
        // return $this->campaignRepo->create($attributes);
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
}