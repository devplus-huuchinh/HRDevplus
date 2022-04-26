import { GoogleOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.scss';

LoginForm.propTypes = {
   handleLoginFormSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
   handleLoginFormSubmit: null,
};

function LoginForm(props) {
   const { handleLoginFormSubmit } = props;

   const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
   };

   return (
      <>
         <Form
            initialValues={{ remember: true }}
            onFinish={handleLoginFormSubmit}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
            className='login-form'
         >
            <label className='login-form--label'>Username</label>
            <Form.Item
               className='login-form--inputWrap'
               name='email'
               rules={[
                  { required: true, message: 'Please input your username!' },
               ]}
            >
               <Input
                  className='login-form--input'
                  placeholder='Enter your username'
               />
            </Form.Item>

            <label className='login-form--label'>Password</label>
            <Form.Item
               className='login-form--inputWrap'
               name='password'
               rules={[
                  { required: true, message: 'Please input your password!' },
               ]}
            >
               <Input.Password
                  className='login-form--input'
                  placeholder='Enter your password'
               />
            </Form.Item>

            <div className='login-form--helper'>
               <Form.Item valuePropName='checked'>
                  <Checkbox>Remember me</Checkbox>
               </Form.Item>
            </div>

            <Form.Item>
               <Button
                  type='primary'
                  htmlType='submit'
                  block
                  className='login-form--submit'
               >
                  Sign in
               </Button>
               <Button
                  className='login-form--google'
                  block
                  icon={<GoogleOutlined />}
               >
                  Sign in with Google
               </Button>
            </Form.Item>
            <Form.Item className='login-form--signUp'>
               <Link to='/auth/forgot-password'>Forgot password?</Link>
            </Form.Item>
         </Form>
      </>
   );
}

export default LoginForm;
