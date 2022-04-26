<?php

namespace App\Repositories;

use App\Models\Campaign;
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

    public function findAll($offset, $limit)
    {
        $firstConnect = $this->model
        ->with(['position:name','technique:name'])
        ->offset($offset)->limit($limit)->get();
        return $firstConnect;
    }

    public function create($array)
    {
        $user = $this->model->find(1);
        return $this->model->create(
            [
                'name'=> $array['name'],
                'address'=> $array['address'],
                'start_ate'=> $array['start_date'],
                'end_ate'=> $array['end_date'],
                'is_active'=>1,
                'user_id'=> $user->user->id,
                'description'=> $array['description'],
                'image_url'=> $array['image_url'],
            ]
        );
    }

    public function findCampaign($campaignId)
    {
        return $this->model->where('is_active', 1)->get();

    }
    
    public function showCampaign($campaignId)
    {
        return $this->model->where('id', $campaignId)->first();
    }
}