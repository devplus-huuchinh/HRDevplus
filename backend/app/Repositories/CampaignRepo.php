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

    public function getAllByYear($year)
    {
        return $this->model->whereYear('created_at', $year)->orderBy('created_at', 'asc')->get()->all();
    }

    public function countCampaigns()
    {
        return $this->model->count();
    }

    public function editInfo($request)
    {
        $campaign = $this->model->find($request->id);
        $campaign->name = $request->name;
        $campaign->address = $request->address;
        $campaign->start_date = $request->start_date;
        $campaign->end_date = $request->end_date;
        $campaign->quantity = $request->quantity;
        $campaign->description = $request->description;
        $campaign->save();
        return $campaign;
    }

    public function editActive($id, $isActive)
    {
        $campaign = $this->model->find($id);
        $campaign->is_active = $isActive;
        $campaign->save();
        return $campaign;
    }
}
