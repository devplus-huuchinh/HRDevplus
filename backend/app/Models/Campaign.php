<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use EloquentFilter\Filterable;

class Campaign extends Model
{
    use HasFactory;
    use Filterable;

    protected $with = ['position', 'technique'];

    protected $hidden = ['pivot'];

    protected $fillable = [
        'name',
        'address',
        'start_date',
        'end_date',
        'is_active',
        'user_id',
        'description',
        'image_url',
        'quantity'
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
        return $this->hasMany(position_campaign::class);
    }

    public function campaign_technique()
    {
        return $this->hasMany(campaign_technique::class);
    }

    //relationship with position
    public function position()
    {
        return $this->belongsToMany(Position::class, 'position_campaigns');
    }

    // relationship with technique
    public function technique()
    {
        return $this->belongsToMany(Technique::class, 'campaign_techniques');
    }
}
