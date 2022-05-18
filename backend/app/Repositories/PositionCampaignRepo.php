<?php

namespace App\Repositories;

use App\Models\Campaign;
use App\Models\position_campaign;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class PositionCampaignRepo extends EloquentRepo
{
   private $id;
   /**
    * @inheritDoc
    */
   public function getModel()
   {
      return position_campaign::class;
   }

   public function createMulti($data)
   {
      try {
         return $this->model->insert($data);
      } catch (\Throwable $th) {
         return response()->json(["error" => $th]);
      }
   }

   public function updatePositionByCampaign($campaign_id, $positionArr)
   {
      //remove 
      $deleted = $this->model->where('campaign_id', $campaign_id)->delete();
      $arrData = [];
      foreach ($positionArr as $item) {
         array_push($arrData, ["campaign_id" => $campaign_id, "position_id" => $item]);
      }
      return $this->model->insert($arrData);
   }
}
