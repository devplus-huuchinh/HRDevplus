import React from 'react';
import '../ForgotPasswordPage/ForgotPasswordPage.scss';
import { Typography } from 'antd';
import ResetPasswordForm from '../../components/ResetPasswordForm';
import useQuery from '../../../../library/hooks/useQuery';
import authApi from '../../../../api/authApi';
import { useHistory } from 'react-router';

const { Text } = Typography;

const ResetPasswordPage = () => {
   let query = useQuery();
   let history = useHistory();

   const handleResetPassword = async (formData) => {
      try {
         const response = await authApi.resetPassword({
            ...formData,
            token: query.get('token'),
         });

         if (response.message === 'Password reset successfully') {
            history.push('/auth/login');
         }
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className='forgot-password-page'>
         <Text strong className='forgot--title'>
            Reset your password
         </Text>
         <Text className='forgot--subTitle'>
            Please input your new password.
         </Text>
         <ResetPasswordForm handleResetPassword={handleResetPassword} />
      </div>
   );
};

export default ResetPasswordPage;
