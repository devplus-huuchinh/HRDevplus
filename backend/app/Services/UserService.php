<?php

namespace App\Services;

use App\Repositories\UserRepo;
use Illuminate\Support\Facades\Auth;

/**
 * Class UserService
 *
 * @package App\Services
 */
class UserService
{
    /**
     * @var UserRepo
     */
    private $userRepo;

    public function __construct(UserRepo $userRepo)
    {
        $this->userRepo = $userRepo;
    }

    /**
     * @param  $params
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function findAll($params)
    {
        $limit = $params['limit'] ?? 10;
        $offset = $params['offset'] ?? 0;
        return $this->userRepo->findAll((int)$offset, (int)$limit);
    }

    /**
     * @param  $id
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function findOne($id)
    {
        return $this->userRepo->find($id);
    }


    public function loginAuthentication($loginFormData)
    {
        $foundUser = $this->userRepo->findOneByEmail($loginFormData['email']);
        $token = $this->userRepo->createToken($foundUser);
        return $token;
    }

    public function register($userData)
    {
        return $this->userRepo->createUser($userData);
    }
}