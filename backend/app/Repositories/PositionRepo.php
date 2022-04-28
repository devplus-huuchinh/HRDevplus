<?php

namespace App\Repositories;

use App\Models\Position;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class PositionRepo extends EloquentRepo
{
    private $id;
    /**
     * @inheritDoc
     */
    public function getModel()
    {
        return Position::class;
    }

    public function findAll($offset, $limit)
    {
        return $this->model->offset($offset)->limit($limit)->get();
    }

    public function getALl()
    {
        return $this->model->get();
    }
}
