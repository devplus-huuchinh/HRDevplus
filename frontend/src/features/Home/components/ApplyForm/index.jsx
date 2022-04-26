import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

// import PropTypes from 'prop-types';

// ApplyForm.propTypes = {};

const ApplyFormStyled = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: rbga(0, 0, 0, 0.5);
   position: fixed;
   z-index: 9999;
   top: 0;
   left: 0;
   .form__wrapper {
      width: 100%;
      max-width: 740px;
      background-color: #fff;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      padding: 30px 20px;
   }
`;

function ApplyForm(props) {
   return (
      <ApplyFormStyled>
         <div className='form__wrapper'>
            <Form
               name='normal_login'
               className='login-form'
               initialValues={{ remember: true }}
            >
               <Form.Item
                  name='username'
                  rules={[
                     { required: true, message: 'Please input your Username!' },
                  ]}
               >
                  <Input
                     prefix={<UserOutlined className='site-form-item-icon' />}
                     placeholder='Username'
                  />
               </Form.Item>
               <Form.Item
                  name='password'
                  rules={[
                     { required: true, message: 'Please input your Password!' },
                  ]}
               >
                  <Input
                     prefix={<LockOutlined className='site-form-item-icon' />}
                     type='password'
                     placeholder='Password'
                  />
               </Form.Item>
               <Form.Item>
                  <Form.Item name='remember' valuePropName='checked' noStyle>
                     <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                  <a className='login-form-forgot' href=''>
                     Forgot password
                  </a>
               </Form.Item>
               <Form.Item>
                  <Button
                     type='primary'
                     htmlType='submit'
                     className='login-form-button'
                  >
                     Log in
                  </Button>
                  Or <a href=''>register now!</a>
               </Form.Item>
            </Form>
         </div>
      </ApplyFormStyled>
   );
}

export default ApplyForm;
