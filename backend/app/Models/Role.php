<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use EloquentFilter\Filterable;

class Role extends Model
{
    use HasFactory;
    use Filterable;

    protected $fillable = [
        'name',
    ];

    public function user()
    {
        return $this->hasMany(User::class);
    }
}
