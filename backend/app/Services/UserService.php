<?php

namespace App\Services;

use App\Repositories\UserRepo;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;

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

    public function findUserInRole($user)
    {
        return $this->userRepo->userInRole($user);
    }

    public function changeUserPassword($changePasswordFormData, $user)
    {
        if (!$this->userRepo->checkOldPassword($changePasswordFormData, $user)) {
            return ['message' => 'change_password_fail'];
        }

        $foundUser = $this->userRepo->find($user->id);
        $changePassword = $this->userRepo->createNewPassword($changePasswordFormData, $foundUser);
        return [
            'message' => 'change_password_success',
            'data' =>  $changePassword,
        ];
    }

    public function resetUserPassword($request)
    {
        $status = $this->userRepo->passwordReset($request);

        if ($status == Password::PASSWORD_RESET) {
            return [
                'message' => 'Password reset successfully'
            ];
        }

        return [
            'message' => __($status)
        ];
    }

    public function forgotUserPassword($request)
    {
        $status = $this->userRepo->forgotPassword($request);

        if ($status === Password::RESET_LINK_SENT) {
            return [
                'result' => __($status),
                'message' => 'generate_link_success'
            ];
        }

        return [
            'message' => 'generate_link_error'
        ];
    }

    public function userCount()
    {
        return $this->userRepo->countUsers();
    }
}
