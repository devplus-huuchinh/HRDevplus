<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use EloquentFilter\Filterable;

class campaign_technique extends Model
{
    use HasFactory;
    use Filterable;

    protected $fillable = [
        'campaign_id',
        'technique_id',
    ];
    public function technique()
    {
        return $this->belongsTo(Technique::class, 'technique_id', 'id');
    }
    public function campaign()
    {
        return $this->belongsTo(Campaign::class, 'campaign_id', 'id');
    }
}
