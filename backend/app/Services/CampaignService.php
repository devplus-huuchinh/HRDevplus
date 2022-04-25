<?php

namespace App\Services;

use App\Repositories\CampaignRepo;

/**
 * Class UserService
 * @package App\Services
 */
class CampaignService
{
    /**
     * @var UserRepo
     */
    private $CampaignRepo;

    public function __construct(CampaignRepo $campaignRepo)
    {
        $this->CampaignRepo =  $campaignRepo;
    }

    /**
     * @param $params
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function findAll($params)
    {
        $limit = $params['limit'] ?? 10;
        $offset = $params['offset'] ?? 0;
        return $this->CampaignRepo->findAll((int)$offset, (int)$limit);
    }

    /**
     * @param $id
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function findOne($id)
    {
        return $this->userRepo->find($id);
    }
    public function createCamp($request){
        $posts = $this->userRepo->createCamp($request);
        return $posts;
    }
}
