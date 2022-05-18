<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\AcceptCV;
use App\Mail\InviteInterview;
use App\Mail\InviteTest;
use App\Mail\ReceiveConfirmation;
use App\Mail\RejectAfterTest;
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

    public function InviteTest(Request $request)
    {
        $inviteTest = new InviteTest($request->all());
        Mail::to($request->to)->send($inviteTest);
    }

    public function InviteInterview(Request $request)
    {
        $inviteInterview = new InviteInterview($request->all());
        Mail::to($request->to)->send($inviteInterview);
    }

    public function RejectAfterTest(Request $request)
    {
        $rejectAfterTest = new RejectAfterTest($request->all());
        Mail::to($request->to)->send($rejectAfterTest);
    }

    public function AcceptCV(Request $request)
    {
        $acceptCV = new AcceptCV($request->all());
        Mail::to($request->to)->send($acceptCV);
    }
}
