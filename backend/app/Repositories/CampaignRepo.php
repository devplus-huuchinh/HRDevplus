<?php

namespace App\Repositories;

use App\Models\Campaign;

class CampaignRepo extends EloquentRepo
{
    private $id;
    /**
     * @inheritDoc
     */
    public function getModel()
    {
        return Campaign::class;
    }

    /**
     * @param  $offset
     * @param  $limit
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function findAll($offset, $limit)
    {
        return $this->model->offset($offset)->limit($limit)->get();
    }

    /**
     * @param  $id
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function findCampaign($campaignId)
    {
        return $this->model->where('is_active', 1)->get();
    }

    public function showCampaign($campaignId)
    {
        return $this->model->with(['technique:name'])->where('id', $campaignId)->first();
    }
}
