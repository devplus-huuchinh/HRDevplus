<?php

namespace App\Repositories;

use App\Models\Profile;

class ProfileRepo extends EloquentRepo
{
   public function getModel()
   {
      return Profile::class;
   }

   public function getByCampaignId($id)
   {
      return $this->model->where('campaign_id', $id)->get();
   }
}
