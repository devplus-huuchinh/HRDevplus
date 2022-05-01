<?php

namespace App\ModelFilters;

use EloquentFilter\ModelFilter;
use Illuminate\Contracts\Database\Eloquent\Builder;

class CampaignFilter extends ModelFilter
{
    /**
     * Related Models that have ModelFilters as well as the method on the ModelFilter
     * As [relationMethod => [input_key1, input_key2]].
     *
     * @var array
     */
    public $relations = [];

    public function name($name)
    {
        if ($name) {
            return $this->where('name', 'LIKE', '%' . $name . '%');
        }
    }

    public function campaignTechnique($techniqueArray)
    {
        return $this->whereHas('campaign_technique.technique', function ($query) use ($techniqueArray) {
            return $query->whereIn('id', $techniqueArray);
        });
    }

    public function positionCampaign($positionArray)
    {
        return $this->whereHas('position_campaign.position', function ($query) use ($positionArray) {
            return $query->whereIn('id', $positionArray);
        });
    }

    public function isActive($statusArray)
    {
        return $this->whereIn('is_active', $statusArray);
    }

    public function startDate($startDate)
    {
        return $this->where('start_date', '>=', $startDate);
    }

    public function endDate($endDate)
    {
        return $this->where('end_date', '<=', $endDate);
    }
}
