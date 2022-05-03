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
            ->with(['position:name', 'technique:name'])
            ->offset($offset)->limit($limit)->get();
        return $firstConnect;
    }

    public function create($data)
    {
        try {
            $newCampaign = $this->model->create($data);
            return $newCampaign;
        } catch (\Throwable $th) {
            return response()->json(["error" => $th]);
        }
    }

    public function findCampaign($campaignId)
    {
        return $this->model->where('is_active', 1)->get();
    }

    public function showCampaign($campaignId)
    {
        return $this->model->with(['technique:name', 'position:name'])->where('id', $campaignId)->first();
    }
    public function getByCampaignId($id)
    {
        return $this->model->where('id', $id)->with('profile')->first();
    }
}
