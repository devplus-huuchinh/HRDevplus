<?php

namespace App\Services;

use App\Repositories\CampaignRepo;

/**
 * Class UserService
 *
 * @package App\Services
 */
class CampaignService
{
    /**
     * @var CampaignRepo
     */
    private $campaignRepo;

    public function __construct(CampaignRepo $campaignRepo)
    {
        $this->campaignRepo = $campaignRepo;
    }

    /**
     * @param  $params
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function findAll($params)
    {
        $limit = $params['limit'] ?? 10;
        $offset = $params['offset'] ?? 0;
        return $this->campaignRepo->findAll((int)$offset, (int)$limit);
    }


    /**
     * @param  $id
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function findOne($id)
    {
        return $this->campaignRepo->find($id);
    }


    /**
     * @param  $params
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function findCampaignActive($id)
    {
        return $this->campaignRepo->findCampaign($id);
    }

    public function showCampaignDetail($id)
    {
        return $this->campaignRepo->showCampaign($id);
    }
}