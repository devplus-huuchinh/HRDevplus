<?php

namespace App\ModelFilters;

use EloquentFilter\ModelFilter;

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
            return $this->where('name', 'LIKE', '%' . $name . '%')->where('is_active', '=', 1);
        }
    }


    public function address($address)
    {
        if ($address) {
            return $this->where('address', 'LIKE', '%' . $address . '%');
        }
    }

    public function campaignTechnique($technique_id)
    {
        return $this->related('campaign_technique', 'technique_id', '=', $technique_id);
    }
}
