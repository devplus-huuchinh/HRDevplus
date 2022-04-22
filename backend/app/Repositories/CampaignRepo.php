<?php

namespace App\Repositories;

use App\Models\Campaign;

class CampaignRepo extends EloquentRepo
{
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
}