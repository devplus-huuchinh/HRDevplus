<?php

namespace App\Repositories;

use App\Models\Profile;

class ProfileRepo extends EloquentRepo
{
   public function getModel()
   {
      return Profile::class;
   }

   // public function getByCampaignId($id)
   // {
   //    return $this->model->where('campaign_id', $id)->with('campaign')->with('position')->get();
   // }

   // public function editStepById($id, $value)
   // {
   //    $profile = $this->model->find($id);
   //    $profile->step = $value;
   //    $profile->save();
   // }

   // public function editStatusById($id, $value)
   // {
   //    $profile = $this->model->find($id);
   //    $profile->status = $value;
   //    $profile->save();
   // }

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

   public function edit($id, $step, $status)
   {
      $profile = $this->model->find($id);
      $profile->step = $step;
      $profile->status = $status;
      $profile->save();
   }

   public function getProfileByYear($year)
   {
      return $this->model->whereYear('created_at', $year)->orderBy('created_at', 'asc')->get()->all();
   }

   public function countProfiles()
   {
      return $this->model->count();
   }

   public function getDetail($id)
   {
      return $this->model->where('id', $id)->with(['technique'])->with('position')->first();
   }
}
