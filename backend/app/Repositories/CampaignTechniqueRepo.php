<?php

namespace App\Repositories;

use App\Models\Campaign;
use App\Models\campaign_technique;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class CampaignTechniqueRepo extends EloquentRepo
{
   private $id;
   /**
    * @inheritDoc
    */
   public function getModel()
   {
      return campaign_technique::class;
   }

   public function createMulti($data)
   {
      try {
         return $this->model->insert($data);
      } catch (\Throwable $th) {
         return response()->json(["error" => $th]);
      }
   }

   public function updateTechniqueByCampaign($campaign_id, $techniqueArr)
   {
      //remove 
      $deleted = $this->model->where('campaign_id', $campaign_id)->delete();
      $arrData = [];
      foreach ($techniqueArr as $item) {
         array_push($arrData, ["campaign_id" => $campaign_id, "technique_id" => $item]);
      }
      return $this->model->insert($arrData);
   }
}
