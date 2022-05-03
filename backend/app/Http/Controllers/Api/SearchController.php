<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Campaign;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function searchCampaign(Request $request)
    {
        return Campaign::filter($request->all())->paginateFilter(2);
    }
}
