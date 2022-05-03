<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ReceiveConfirmation extends Mailable
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
        return $this->view('emails.receiveConfirmation')
            ->subject('[ST Software HR] CV Receive Confirmation')
            ->with([
                'candidate_name' => $this->mailData['candidateName'],
                'position' => $this->mailData['position'],
            ]);
    }
}
