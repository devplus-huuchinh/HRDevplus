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
}
