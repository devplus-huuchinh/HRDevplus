<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use EloquentFilter\Filterable;

class Campaign extends Model
{
    use HasFactory;
    use Filterable;

    protected $fillable = [
        'name',
        'address',
        'startDate',
        'endDate',
        'isActive',
        'createdBy',
        'description',
        'imageUrl',
    ];
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function profile()
    {
        return $this->hasMany(Profile::class);
    }

    public function position_campaign()
    {
        return $this->hasMany(Position_campaign::class);
    }

    public function campaign_technique()
    {
        return $this->hasMany(campaign_technique::class);
    }
}
