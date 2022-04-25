<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserRepo extends EloquentRepo
{
    /**
     * @inheritDoc
     */
    public function getModel()
    {
        return User::class;
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

    public function findOneByEmail($email)
    {
        return $this->model->where('email', $email)->first();
    }

    public function createUser($userData)
    {
        return $this->model->create(
            [
            'name' => $userData['name'],
            'email' => $userData['email'],
            'password' => Hash::make($userData['password']),
            'role_id' => $userData['role_id'],
            ]
        );
    }

    public function createToken($user)
    {
        return $user->createToken('authToken')->plainTextToken;
    }

    public function userInRole($user)
    {
        return $this->model->where('id', $user->id)->with('role')->first();
    }

    public function checkOldPassword($changePasswordFormData, $user)
    {
        return Hash::check($changePasswordFormData['old_password'], $user->password);
    }

    public function createNewPassword($changePasswordFormData, $foundUser)
    {
        $foundUser->password = Hash::make($changePasswordFormData['new_password']);
        $foundUser->save();

        return $foundUser;
    }
}