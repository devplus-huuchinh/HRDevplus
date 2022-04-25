<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Technique extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
    ];
    public function profile_technique()
    {
        return $this->hasMany(Profile_technique::class);
    }
    public function campaign_technique()
    {
        return $this->hasMany(campaign_technique::class);
    }
}
