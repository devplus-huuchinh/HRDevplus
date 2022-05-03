<!DOCTYPE html>
<html>

<head>
   <title>CV Receive Confirmation</title>
</head>

<body>
   <style>
      div.main {
         display: flex;
         flex-direction: column;
         gap: 5px;
      }
   </style>
   <div class="main">
      <p>
         <strong>
            Dear Mr/Ms. {{ $candidate_name }}
         </strong>
      </p>
      <p>
         Thanks for applying to ST Software. Your application has been received and we will review it right away.
         If your application seems like a good fit for the {{ $position }} position we will contact you soon.
      </p>
      <b>Best regards,</b>
      <hr />
      <p>
         <em>
            ** Please note: Do not reply to this email. This email is sent from an unattended mailbox. Replies will not be read.
         </em>
      </p>
   </div>
</body>

</html>