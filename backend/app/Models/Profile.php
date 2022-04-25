<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'campaign_id',
        'firstName',
        'lastName',
        'email',
        'phoneNum',
        'status',
        'step',
        'imageUrl',
        'cv_Url',
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
