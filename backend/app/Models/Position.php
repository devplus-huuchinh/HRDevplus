<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
    ];

    public function profile()
    {
        return $this->hasMany(Profile::class);
    }
    public function profile_campaign()
    {
        return $this->hasMany(Position_campaign::class);
    }
}
