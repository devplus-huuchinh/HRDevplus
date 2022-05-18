<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\ListRequest;
use App\Repositories\PostRepo;
use App\Services\UserService;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;

class UserController extends Controller
{
    /**
     * @var UserService
     */
    private $userService;
    /**
     * @var PostRepo
     */
    private $postRepo;

    public function __construct(UserService $userService, PostRepo $postRepo)
    {
        $this->userService = $userService;
        $this->postRepo = $postRepo;
    }

    /**
     * @param ListRequest $request
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function index(ListRequest $request)
    {
        return $this->userService->findAll($request->all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     * @param int $id
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function show($id)
    {
        return $this->userService->findOne($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function register(Request $request)
    {
        try {
            $request->validate([
                'email' => 'required|unique:users|max:255',
                'name' => 'required|max:255',
                'password' => 'required',
            ]);

            $createNewUser = $this->userService->register($request->all());

            return response()->json($createNewUser);
        } catch (\Throwable $error) {
            return response()->json([
                'message' => 'register_fail',
                'error' => $error,
            ], 500);
        }
    }

    public function login(Request $request)
    {
        try {
            $request->validate([
                'email' => 'email|required',
                'password' => 'required'
            ]);

            if (!Auth::attempt($request->all())) {
                return response()->json([
                    'message' => 'incorrect_username_password'
                ]);
            }

            $token = $this->userService->loginAuthentication($request->all());

            return response()->json([
                'access_token' => $token,
                'token_type' => 'Bearer',
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'login_error',
                'error' => $th,
            ], 500);
        }
    }

    public function logout()
    {
        try {
            Auth::logout();
            return response()->json([
                'message' => 'logout_successful'
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'logout_error',
                'error' => $th,
            ], 500);
        }
    }

    public function changePassword(Request $request)
    {
        try {
            $result = $this->userService->changeUserPassword($request->all(), $request->user());
            return response()->json($result);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'change_error',
                'error' => $th,
            ], 500);
        }
    }

    public function getCurrentUser(Request $request)
    {
        try {
            $user = $request->user();
            $userInRole = $this->userService->findUserInRole($user);
            return response()->json($userInRole);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'logout_error',
                'error' => $th,
            ], 500);
        }
    }

    public function forgotPassword(Request $request)
    {
        $request->validate(['email' => 'required|email']);
        $result = $this->userService->forgotUserPassword($request);

        return response()->json($result);
    }

    public function resetPassword(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:6|confirmed',
        ]);

        $result = $this->userService->resetUserPassword($request);

        return response()->json($result);
    }
}
