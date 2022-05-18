import { message, Spin, Typography } from 'antd';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import authApi from '../../../../api/authApi';
import ForgotPasswordForm from '../../components/ForgotPasswordForm';
import './ForgotPasswordPage.scss';

const { Text } = Typography;

function ForgotPasswordPage(props) {
   let history = useHistory();
   const [isSpinning, setIsSpinning] = useState(false);

   const handleForgotPasswordSubmit = async (formData) => {
      try {
         setIsSpinning(true);

         const response = await authApi.forgotPassword({
            email: formData.email,
         });

         if (response.message === 'generate_link_error') {
            setIsSpinning(false);
            return message.error('Something went wrong! Please try again.');
         }

         setIsSpinning(false);
         return history.push(`/auth/forgot-password/success/${formData.email}`);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <Spin spinning={isSpinning}>
         <div className='forgot-password-page'>
            <Text strong className='forgot--title' level={3}>
               Forgot password?
            </Text>
            <Text className='forgot--subTitle'>
               Dont worries, we'll send you reset instructions.
            </Text>
            <ForgotPasswordForm
               handleForgotPasswordSubmit={handleForgotPasswordSubmit}
            />
         </div>
      </Spin>
   );
}

export default ForgotPasswordPage;
