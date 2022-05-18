import { Alert, Typography } from 'antd';
import React, { useState } from 'react';
import authApi from '../../../../api/authApi';
import ChangePasswordForm from '../../components/ChangePasswordForm';
import './ChangePasswordPage.scss';

const { Title } = Typography;

function ChangePasswordPage(props) {
   const [alertShow, setAlertShow] = useState({
      isShow: false,
      type: '',
      message: '',
   });

   const handleSubmitChangePassword = async (formData) => {
      try {
         const response = await authApi.changePassword(formData);
         setAlertShow({
            ...alertShow,
            isShow: true,
            type:
               response.message === 'change_password_success'
                  ? 'success'
                  : 'error',
            message:
               response.message === 'change_password_success'
                  ? 'Change Password Success'
                  : 'Incorrect password, please try again!',
         });
         console.log('🚀 ~ response', response);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className='change-password-page'>
         <Title level={3}>Change Password</Title>
         <div className='change-form'>
            {alertShow.isShow && (
               <Alert
                  className='change-form--alert'
                  message={alertShow.message}
                  type={alertShow.type}
                  showIcon
                  closable
               />
            )}

            <ChangePasswordForm
               handleSubmitChangePassword={handleSubmitChangePassword}
            />
         </div>
      </div>
   );
}

export default ChangePasswordPage;
