<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AcceptCV extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($mailData)
    {
        $this->mailData = $mailData;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.accpectCV')
            ->subject('[ST Software] Offer Letter')
            ->with([
                'position' => $this->mailData['position'],
                'candidate_name' => $this->mailData['candidateName'],
                'start_date' => $this->mailData['start_date'],
                'end_date' => $this->mailData['end_date'],
            ]);
    }
}
