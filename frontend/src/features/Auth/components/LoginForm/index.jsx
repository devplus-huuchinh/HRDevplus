import { Button, Form, Input, Space } from 'antd';
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
            <Space direction='vertical' size={10} style={{ width: '100%' }}>
               <div>
                  <label className='login-form--label'>Email</label>
                  <Form.Item
                     className='login-form--inputWrap'
                     name='email'
                     rules={[
                        {
                           required: true,
                           message: 'Please input your username!',
                        },
                     ]}
                  >
                     <Input
                        className='login-form--input'
                        placeholder='Enter your username'
                     />
                  </Form.Item>
               </div>
               <div>
                  <label className='login-form--label'>Password</label>
                  <Form.Item
                     className='login-form--inputWrap'
                     name='password'
                     rules={[
                        {
                           required: true,
                           message: 'Please input your password!',
                        },
                     ]}
                  >
                     <Input.Password
                        className='login-form--input'
                        placeholder='Enter your password'
                     />
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
               </Form.Item>
               <Form.Item className='login-form--signUp'>
                  <Link to='/auth/forgot-password'>Forgot password?</Link>
               </Form.Item>
            </Space>
         </Form>
      </>
   );
}

export default LoginForm;
