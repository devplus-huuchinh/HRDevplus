<?php

namespace App\Services;

use App\Repositories\CampaignRepo;

class CampaignService
{
    private $campaignRepo;

    public function __construct(CampaignRepo $campaignRepo)
    {
        $this->campaignRepo = $campaignRepo;
    }

    public function findAll($params)
    {
        $limit = $params['limit'] ?? 10;
        $offset = $params['offset'] ?? 0;
        return $this->campaignRepo->findAll((int)$offset, (int)$limit);
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