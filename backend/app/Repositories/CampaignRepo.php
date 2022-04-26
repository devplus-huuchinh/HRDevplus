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
         $data = $this->model
        ->join('campaign_techniques','campaigns.id','=','campaign_id')
        ->join('techniques','campaign_techniques.technique_id','=','technique_id')
        ->join('position_campaigns','campaigns.id','=','position_campaigns.campaign_id')
        ->join('positions','position_campaigns.position_id','=','position_id')
        ->select('campaigns.*','techniques.name as tags','positions.name as positions')
        ->offset($offset)->limit($limit)->distinct()->get()->toArray();
        return $data;
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