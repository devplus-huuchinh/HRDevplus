<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use EloquentFilter\Filterable;

class Technique extends Model
{
    use HasFactory;
    use Filterable;

    protected $fillable = [
        'name',
    ];

    public function profile_technique()
    {
        return $this->hasMany(profile_technique::class);
    }

    public function campaign_technique()
    {
        return $this->hasMany(campaign_technique::class);
    }
}
