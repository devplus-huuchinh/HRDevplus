<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ChangePassword;

class EmailController extends Controller
{
    public function index()
    {
        $mailData = [
            'title' => 'Change password',
            'body' => 'Testing.'
        ];


        Mail::to('facebook662311@gmail.com')->send(new ChangePassword($mailData));
    }
}
