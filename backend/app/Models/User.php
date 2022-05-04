<?php

namespace App\Models;

use App\Notifications\ResetPasswordNotification;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use EloquentFilter\Filterable;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasFactory;
    use Notifiable;
    use HasApiTokens, HasFactory, Notifiable;
    use Filterable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role_id',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'string',
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
    ];

    public function sendPasswordResetNotification($token)
    {
        $url = config('auth.client_url') . '/auth/reset-password?token=' . $token;
        $this->notify(new ResetPasswordNotification($url));
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    // public function posts()
    // {
    //     return $this->hasMany('App\Models\Post');
    // }
    public function role()
    {
        return $this->belongsTo(Role::class, 'role_id', 'id');
    }

    public function campaign()
    {
        return $this->hasMany(Campaign::class);
    }
}
