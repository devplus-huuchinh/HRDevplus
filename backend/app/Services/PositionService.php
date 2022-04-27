<?php

namespace App\Services;

use App\Repositories\PositionRepo;
use Illuminate\Http\Request;

class PositionService
{
    private $positionRepo;

    public function __construct(PositionRepo $positionRepo)
    {
        $this->positionRepo = $positionRepo;
    }

    public function findAll($params)
    {
        $limit = $params['limit'] ?? 10;
        $offset = $params['offset'] ?? 0;
        return $this->positionRepo->findAll((int)$offset, (int)$limit);
    }
}
