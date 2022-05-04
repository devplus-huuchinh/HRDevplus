<?php

use App\Http\Controllers\Api\CampaignController;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\EmailController;
use App\Http\Controllers\Api\PositionController;
use App\Http\Controllers\Api\SearchController;
use App\Http\Controllers\Api\TechniqueController;
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
                Route::get("/{id}", 'showCampaignDetail');
                Route::get('', 'findCampaignActive');
                Route::post('/apply-campaign', 'applyCampaign');
            }
        );
    }
);

Route::prefix('/v1/search')->group(
    function () {
        Route::controller(SearchController::class)->group(
            function () {
                Route::get('/campaign-search', 'searchCampaign');
                Route::get('/profile-search', 'searchProfile');
            }
        );
    }
);

Route::prefix('/v1/mail')->group(
    function () {
        Route::controller(EmailController::class)->group(
            function () {
                Route::get('/receive-confirmation', 'ReceiveConfirmationMail');
                Route::get('/reject-cv', 'RejectCVMail');
                Route::get('/invite-test', 'InviteTest');
                Route::get('/invite-interview', 'InviteInterview');
                Route::get('/reject-after-test', 'RejectAfterTest');
                Route::get('/accept-cv', 'AcceptCV');
            }
        );
    }
);

Route::name('api.posts.')->group(
    function () {
        Route::get('v1/posts', [UserController::class, 'index'])->name('index');
    }
);

Route::prefix('/v1/profiles')->group(
    function () {
        Route::controller(ProfileController::class)->group(
            function () {
                Route::get('/dropdownlist', 'dropdownlistData');
                Route::get('/', 'all');
            }
        );
    }
);

Route::prefix('/v1/profile')->group(function () {
    Route::controller(ProfileController::class)->group(function () {
        Route::patch('/reject', 'rejectProfile');
        Route::post('/create', 'create');
        Route::get('/statistics', 'statistics');
        Route::get('/detail', 'detail');
        Route::patch('/', 'editProfile');
    });
});

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

// Route::prefix('/v1/profile')->group(
//     function () {
//         Route::controller(ProfileController::class)->group(
//             function () {

//             }
//         );
//     }
// );

Route::name('api.posts.')->group(
    function () {
        Route::get('v1/posts', [UserController::class, 'index'])->name('index');
    }
);

Route::prefix('v1/campaign')->group(function () {
    Route::middleware(['auth:sanctum'])->group(function () {
        Route::controller(CampaignController::class)->group(function () {
            Route::get('/droplist', 'getDropList');
            Route::get('/statistics', 'statistics');
            Route::get('/count', 'count');
            Route::patch('/edit', 'editInfo');
            Route::patch('/active', 'editActive');
            Route::get('/', 'index');
            Route::post('/', 'newCampaign');
        });
    });
});
