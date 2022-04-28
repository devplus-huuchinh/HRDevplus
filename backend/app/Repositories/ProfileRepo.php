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

   public function create($profileFormData)
   {
      return $this->model->create([
         'first_name' => $profileFormData['firstName'],
         'last_name' => $profileFormData['lastName'],
         'email' => $profileFormData['email'],
         'phone_numb' => $profileFormData['phoneNumber'],
         'position_id' => $profileFormData['position'],
         'image_url' => $profileFormData['imageUrl'],
         'cv_url' => $profileFormData['cvUrl'],
         'campaign_id' => $profileFormData['campaignId'],
         'status' => 'PENDING',
         'step' => 'NEW',
      ]);
   }
}
