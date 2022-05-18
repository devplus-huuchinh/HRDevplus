import React, { useState } from 'react';
import '../ForgotPasswordPage/ForgotPasswordPage.scss';
import { message, Spin, Typography } from 'antd';
import ResetPasswordForm from '../../components/ResetPasswordForm';
import useQuery from '../../../../library/hooks/useQuery';
import authApi from '../../../../api/authApi';
import { useHistory } from 'react-router';

const { Text } = Typography;

const ResetPasswordPage = () => {
   const [isSpinning, setIsSpinning] = useState(false);
   let query = useQuery();
   let history = useHistory();

   const handleResetPassword = async (formData) => {
      try {
         setIsSpinning(true);

         const response = await authApi.resetPassword({
            ...formData,
            token: query.get('token'),
         });

         if (response.message === 'Password reset successfully') {
            setIsSpinning(false);
            return history.push('/auth/login');
         }

         setIsSpinning(false);
         return message.error('Something went wrong! Please try again.');
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <Spin spinning={isSpinning}>
         <div className='forgot-password-page'>
            <Text strong className='forgot--title'>
               Reset your password
            </Text>
            <Text className='forgot--subTitle'>
               Please input your new password.
            </Text>
            <ResetPasswordForm handleResetPassword={handleResetPassword} />
         </div>
      </Spin>
   );
};

export default ResetPasswordPage;
