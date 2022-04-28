<?php

namespace App\Repositories;

use App\Models\Profile;

class ProfileRepo extends EloquentRepo
{
    /**
     * @inheritDoc
     */
    public function getModel()
    {
        return Profile::class;
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
