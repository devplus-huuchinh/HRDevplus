import { Typography, message } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import authApi from '../../../../api/authApi';
import LoginForm from '../../components/LoginForm';
import authAction from '@iso/redux/auth/actions';
import appAction from '@iso/redux/app/actions';
import loginImgBackground from '../../../../assets/images/sign.jpg';

import './LoginPage.scss';

function LoginPage(props) {
   const { Text, Title } = Typography;
   let history = useHistory();
   const dispatch = useDispatch();

   const { login } = authAction;
   const { clearMenu } = appAction;

   const handleLoginFormSubmit = async (formData) => {
      try {
         await authApi.csrfCookie();
         const response = await authApi.login(formData);
         localStorage.setItem('idToken', response.access_token);
         if (!response.access_token) {
            return message.error('Incorrect username or password.');
         }
         dispatch(clearMenu());
         dispatch(login(response.access_token));
         return (window.location = '/');
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className='login-page'>
         <div className='login-page--background'>
            <img src={loginImgBackground} className='login-page--image' />
         </div>
         <div className='login-page--form'>
            <div className='login-page--title'>
               <Title>Welcome back</Title>
               <Text>Welcome back! Please enter your details.</Text>
            </div>
            <LoginForm handleLoginFormSubmit={handleLoginFormSubmit} />
         </div>
      </div>
   );
}

export default LoginPage;
