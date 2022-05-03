<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;

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

    public function passwordReset($request)
    {
        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user) use ($request) {
                $user->forceFill(
                    [
                        'password' => Hash::make($request->password),
                    ]
                )->save();

                $user->tokens()->delete();

                event(new PasswordReset($user));
            }
        );

        return $status;
    }

    public function forgotPassword($request)
    {
        $status = Password::sendResetLink(
            $request->only('email')
        );

        return $status;
    }

    public function countUsers()
    {
        return $this->model->count();
    }
}
