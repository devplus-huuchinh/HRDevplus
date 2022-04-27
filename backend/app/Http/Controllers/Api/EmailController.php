<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ChangePassword;

class EmailController extends Controller
{
    public function resetPassword(Request $request)
    {
        $mailData = [
            'title' => 'Change password',
            'body' => 'Testing.'
        ];

        $changePassword = new ChangePassword($mailData);
        Mail::to('facebook662311@gmail.com')->send($changePassword);
    }
}
