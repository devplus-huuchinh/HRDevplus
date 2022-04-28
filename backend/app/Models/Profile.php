<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use EloquentFilter\Filterable;

class Profile extends Model
{
    use HasFactory;
    use Filterable;

    protected $fillable = [
        'name',
        'campaign_id',
        'first_name',
        'last_name',
        'email',
        'phone_numb',
        'status',
        'step',
        'image_url',
        'cv_url',
        'position_id'
    ];

    public function campaign()
    {
        return $this->belongsTo(Campaign::class, 'campaign_id', 'id');
    }

    public function position()
    {
        return $this->belongsTo(Position::class, 'position_id', 'id');
    }

    public function profile_technique()
    {
        return $this->hasMany(Profile_technique::class);
    }
}
