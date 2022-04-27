<?php

namespace App\Services;

use App\Repositories\ProfileRepo;

class CampaignService
{
    private $profileRepo;

    public function applyToCampaign($id)
    {
        return $this->campaignRepo->applyToCampaign($id);
    }
}