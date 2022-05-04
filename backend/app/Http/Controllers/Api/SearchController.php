<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Campaign;
use App\Models\Profile;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function searchCampaign(Request $request)
    {
        return Campaign::filter($request->all())->paginateFilter(10);
    }

    public function searchProfile(Request $request)
    {
        return Profile::filter($request->all())->paginateFilter(10);
    }
}
