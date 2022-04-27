import { Button, Result } from 'antd';
import React from 'react';
import { useParams } from 'react-router';
import './CheckYourEmailPage.scss';

const CheckYourEmailPage = () => {
   const { email } = useParams();

   return (
      <div className='check-email-page'>
         <Result
            status='success'
            title={
               <>
                  <div className='check--title'>Check your email</div>
                  <div className='check--subTitle'>
                     We sent a password reset link to
                  </div>
                  <div className='check--email'>
                     <b>{email}</b>
                  </div>
               </>
            }
            extra={[
               <Button
                  key='buy'
                  block
                  type='primary'
                  onClick={() =>
                     window.open('https://mail.google.com/mail/u/0/#inbox')
                  }
               >
                  Open Gmail
               </Button>,
            ]}
         />
      </div>
   );
};

export default CheckYourEmailPage;
