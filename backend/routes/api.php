<?php

use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\CampaignController;
use App\Http\Controllers\EmailController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('/v1/auth')->group(
    function () {
        Route::controller(UserController::class)->group(
            function () {
                Route::post('/register', 'register');
                Route::post('/login', 'login');
                Route::post('/logout', 'logout');
                Route::get('/forgot-password', 'forgotPassword');
                Route::post('/reset-password', 'resetPassword');
            }
        );
        Route::middleware(['auth:sanctum'])->group(
            function () {
                Route::controller(UserController::class)->group(
                    function () {
                        Route::patch('/change-password', 'changePassword');
                        Route::get('/', 'getCurrentUser');
                    }
                );
            }
        );
    }
);


Route::prefix('/v1/campaigns')->group(
    function () {
        Route::controller(CampaignController::class)->group(
            function () {
                Route::get('', 'findCampaignActive');
                Route::get("/{id}", 'showCampaignDetail');
            }
        );
    }
);
Route::prefix('/v1/mail')->group(
    function () {
        Route::controller(EmailController::class)->group(
            function () {
                // Route::get('/reset-password', 'resetPassword');
            }
        );
    }
);

Route::name('api.posts.')->group(
    function () {
        Route::get('v1/posts', [UserController::class, 'index'])->name('index');
    }
);
Route::prefix('v1/campaign')->group(function () {
    Route::controller(CampaignController::class)->group(function () {
        Route::get('/', 'index');
        // Route::post('/', 'store');
    });
});