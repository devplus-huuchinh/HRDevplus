<?php

namespace App\Repositories;

use App\Models\Campaign;
use App\Models\Technique;
use App\Models\Position;
use Illuminate\Database\Eloquent\Relations\MorphTo;
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
        $firstConnect = $this->model
        ->with(['position:name','technique:name'])
        ->offset($offset)->limit($limit)->get();
        // $data = $firstConnect->with(['positions','techniques'])->get();
        // ->join('position_campaigns','campaigns.id','=','position_campaigns.campaign_id')
        // ->with(['Position'])
        // ->toArray();
        return $firstConnect;
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
        return $this->model->where('id', $campaignId)->first();
    }
}