<?php

use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\CampaignController;
use App\Http\Controllers\Api\EmailController;
use App\Http\Controllers\Api\PositionController;
use App\Http\Controllers\Api\SearchController;
use App\Http\Controllers\Api\TechniqueController;
use App\Http\Controllers\Api\ProfileController;
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

Route::prefix('/v1/search')->group(
    function () {
        Route::controller(SearchController::class)->group(
            function () {
                Route::get('/campaign-search', 'searchCampaign');
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


Route::prefix('/v1/technique')->group(
    function () {
        Route::controller(TechniqueController::class)->group(
            function () {
                Route::get('', 'index');
            }
        );
    }
);

Route::prefix('/v1/position')->group(
    function () {
        Route::controller(PositionController::class)->group(
            function () {
                Route::get('', 'index');
            }
        );
    }
);

Route::name('api.posts.')->group(
    function () {
        Route::get('v1/posts', [UserController::class, 'index'])->name('index');
    }
);
