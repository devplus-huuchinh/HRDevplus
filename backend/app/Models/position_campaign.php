<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class position_campaign extends Model
{
    use HasFactory;
    protected $fillable = [
        'position_id',
        'campaign_id',
    ];
    public function campaign()
    {
        return $this->belongsTo(Campaign::class, 'campaign_id', 'id');
    }
    public function position()
    {
        return $this->belongsTo(Position::class, 'position_id', 'id');
    }
}
