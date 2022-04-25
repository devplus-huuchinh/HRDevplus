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
     * @param $offset
     * @param $limit
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function findAll($offset, $limit)
    {
        return $this->model
        ->join('campaign_techniques','campaigns.id','=','campaign_id')
        ->join('techniques','campaign_techniques.technique_id','=','technique_id')
        ->join('position_campaigns','campaigns.id','=','position_campaigns.campaign_id')
        ->join('positions','position_campaigns.position_id','=','position_id')
        ->select('campaigns.*','techniques.name as tags','positions.name as positions')
        ->offset($offset)->limit($limit)->get();
    }
    public function createCamp($attributes){
        $models = $this->model;
        $models->fill($attributes);
        $models->save();
        return $models;
    }
}
