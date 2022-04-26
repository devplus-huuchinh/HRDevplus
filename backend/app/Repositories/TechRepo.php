<?php

namespace App\Repositories;

use App\Models\Technique;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;

class TechRepo extends EloquentRepo
{
    /**
     * @inheritDoc
     */
    public function getModel()
    {
        return Technique::class;
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