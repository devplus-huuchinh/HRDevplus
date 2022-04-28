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
}
