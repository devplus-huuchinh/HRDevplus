<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use EloquentFilter\Filterable;

class Position extends Model
{
    use HasFactory;
    use Filterable;

    protected $fillable = [
        'name',
    ];

    public function profile()
    {
        return $this->hasMany(Profile::class);
    }
    public function profile_campaign()
    {
        return $this->hasMany(position_campaign::class);
    }
}
