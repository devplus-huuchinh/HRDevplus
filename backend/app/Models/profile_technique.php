<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use EloquentFilter\Filterable;

class profile_technique extends Model
{
    use HasFactory;
    use Filterable;

    protected $fillable = [
        'profile_id',
        'technique_id',
    ];

    public function profile()
    {
        return $this->belongsTo(Profile::class, 'profile_id', 'id');
    }

    public function technique()
    {
        return $this->belongsTo(Technique::class, 'technique_id', 'id');
    }
}
