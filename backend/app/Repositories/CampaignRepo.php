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
        return $this->model->offset($offset)->limit($limit)->get();
    }
    public function createCamp($attributes){
        $models = $this->model;
        $models->fill($attributes);
        $models->save();
        return $models;
    }
}
