<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\ReceiveConfirmation;
use App\Mail\RejectCV;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    public function ReceiveConfirmationMail(Request $request)
    {
        $receiveConfirmation = new ReceiveConfirmation($request->all());
        Mail::to($request->to)->send($receiveConfirmation);
    }

    public function RejectCVMail(Request $request)
    {
        $rejectCV = new RejectCV($request->all());
        Mail::to($request->to)->send($rejectCV);
    }
}
