import appAction from '@iso/redux/app/actions';
import authAction from '@iso/redux/auth/actions';
import { message, Spin, Typography } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import authApi from '../../../../api/authApi';
import loginImgBackground from '../../../../assets/images/sign.jpg';
import LoginForm from '../../components/LoginForm';
import './LoginPage.scss';

const { Text, Title } = Typography;

function LoginPage(props) {
   const dispatch = useDispatch();
   const history = useHistory();

   const [isLoading, setIsLoading] = useState(false);
   const { login } = authAction;
   const { clearMenu } = appAction;

   const handleLoginFormSubmit = async (formData) => {
      try {
         setIsLoading(true);
         await authApi.csrfCookie();
         const response = await authApi.login(formData);
         localStorage.setItem('idToken', response.id_token);
         if (!response.access_token) {
            setIsLoading(false);
            return message.error('Incorrect username or password.');
         }
         dispatch(clearMenu());
         dispatch(login(response.access_token));
         setIsLoading(false);
         return history.push('/dashboard');
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <Spin spinning={isLoading}>
         <div className='login-page'>
            <div className='login-page--background'>
               <img
                  src={loginImgBackground}
                  alt='background'
                  className='login-page--image'
               />
            </div>
            <div className='login-page--form'>
               <div className='login-page--title'>
                  <Title>Welcome back</Title>
                  <Text>Welcome back! Please enter your details.</Text>
               </div>
               <LoginForm handleLoginFormSubmit={handleLoginFormSubmit} />
            </div>
         </div>
      </Spin>
   );
}

export default LoginPage;
