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
      return $this->model->where('campaign_id', $id)->with('position')->get();
   }

   public function editStepById($id, $value)
   {
      $profile = $this->model->find($id);
      $profile->step = $value;
      $profile->save();
   }

   public function editStatusById($id, $value)
   {
      $profile = $this->model->find($id);
      $profile->status = $value;
      $profile->save();
   }
   public function applyToCampaign()
   {
   }
}
