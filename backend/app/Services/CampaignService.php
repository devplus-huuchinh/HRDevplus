<?php

namespace App\Services;

use App\Repositories\CampaignRepo;
use App\Repositories\TechCampRepo;
use App\Repositories\TechRepo;
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
    private $techCampRepo;
    private $techRepo;
    public function __construct(CampaignRepo $campaignRepo,TechCampRepo $techCampRepo, TechRepo $techRepo )
    {
        $this->campaignRepo = $campaignRepo;
        $this->techCampRepo = $techCampRepo;
        $this->techRepo = $techRepo;
    }

    /**
     * @param  $params
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function findAll($params)
    {
        $limit = $params['limit'] ?? 10;
        $offset = $params['offset'] ?? 0;
        // $techCamp=  $this->techCampRepo->findAll((int)$offset, (int)$limit);
        // $tech= $this->techRepo->findAll((int)$offset, (int)$limit);
        // $this->campaignRepo->findAll((int)$offset, (int)$limit);
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