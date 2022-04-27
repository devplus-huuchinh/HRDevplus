<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Campaign extends Model
{
    use HasFactory;
    protected $with = ['position', 'technique'];

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

    public function position()
    {
        return $this->belongsToMany(position::class, 'position_campaigns');
    }

    public function technique()
    {
        return $this->belongsToMany(technique::class, 'campaign_techniques');
    }
}