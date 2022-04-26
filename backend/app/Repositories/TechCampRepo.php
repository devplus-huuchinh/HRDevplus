<?php

namespace App\Repositories;

use App\Models\campaign_technique;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;

class TechCampRepo extends EloquentRepo
{
    /**
     * @inheritDoc
     */
    public function getModel()
    {
        return campaign_technique::class;
    }

    /**
     * @param  $offset
     * @param  $limit
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function findAll($offset, $limit)
    {
        return $this->model->offset($offset)->limit($limit)->get();
    }

}