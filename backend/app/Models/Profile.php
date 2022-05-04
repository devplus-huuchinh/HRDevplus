<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use EloquentFilter\Filterable;

class Profile extends Model
{
    use HasFactory;
    use Filterable;
    protected $with = ['technique'];

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
        return $this->hasMany(profile_technique::class);
    }

    public function technique()
    {
        return $this->belongsToMany(Technique::class, 'profile_techniques');
    }
}