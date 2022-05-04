<?php

namespace App\ModelFilters;

use EloquentFilter\ModelFilter;

class ProfileFilter extends ModelFilter
{
    /**
     * Related Models that have ModelFilters as well as the method on the ModelFilter
     * As [relationMethod => [input_key1, input_key2]].
     *
     * @var array
     */
    public $relations = [];

    public function firstName($firstName)
    {
        if ($firstName) {
            return $this->where('first_name', 'LIKE', '%' . $firstName . '%');
        }
    }

    public function email($email)
    {
        if ($email) {
            return $this->where('email', 'LIKE', '%' . $email . '%');
        }
    }

    public function phoneNumb($phone_numb)
    {
        if ($phone_numb) {
            return $this->where('phone_numb', 'LIKE', '%' . $phone_numb . '%');
        }
    }

    public function campaign($campaign_id)
    {
        return $this->where('campaign_id', $campaign_id);
    }

    public function status($statusArray)
    {
        if ($statusArray) {
            return $this->whereIn('status', $statusArray);
        }
    }
}
