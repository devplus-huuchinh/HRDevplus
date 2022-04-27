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

    public function findAllHr($offset, $limit)
    {
        $firstConnect = $this->model
        ->with(['position:name','technique:name'])
        ->offset($offset)->limit($limit)->get();
        return $firstConnect;
    }

    public function create($data)
    {
        $user = $this->model->find(1);
        // $campaign = $this->model->find(1);
        // $now = date_create('now')->format('Y-m-d');
        // dd($now);
        // dd($campaign);
        // $data=  $this->model->create(
        //     [
        //         'name'=> $data['name'],
        //         'address'=> $data['address'],
        //         'start_date'=> $data['start_date'],
        //         'end_date'=> $data['end_date'],
        //         'is_active'=>1,
        //         'user_id'=> $user->user->id,
        //         'description'=> $data['description'],
        //         'image_url'=> $data['image_url'],
        //     ]
        // );
        // $data->save();
        // $data->position()->attach($data['position_id']);
        return $data;
    }   
    public function findCampaign($campaignId)
    {
        return $this->model->where('is_active', 1)->get();
    }
    
    public function showCampaign($campaignId)
    {
        return $this->model->with(['technique:name'])->where('id', $campaignId)->first();
    }
}