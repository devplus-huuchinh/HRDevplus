import { Typography } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';
import authApi from '../../../../api/authApi';
import ForgotPasswordForm from '../../components/ForgotPasswordForm';
import './ForgotPasswordPage.scss';

const { Text } = Typography;

function ForgotPasswordPage(props) {
   let history = useHistory();

   const handleForgotPasswordSubmit = async (formData) => {
      try {
         const response = await authApi.forgotPassword({
            email: formData.email,
         });

         if (response.message === 'generate_link_success') {
            history.push(`/auth/forgot-password/success/${formData.email}`);
         }
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className='forgot-password-page'>
         <Text strong className='forgot--title' level={3}>
            Forgot password?
         </Text>
         <Text className='forgot--subTitle'>
            No worries, we'll send you reset instructions.
         </Text>
         <ForgotPasswordForm
            handleForgotPasswordSubmit={handleForgotPasswordSubmit}
         />
      </div>
   );
}

export default ForgotPasswordPage;
