import { Button, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import '../../components/ForgotPasswordForm/ForgotPasswordForm.scss';

ResetPasswordForm.propTypes = {
   handleResetPassword: PropTypes.func,
};

ResetPasswordForm.defaultProps = {
   handleResetPassword: null,
};

function ResetPasswordForm(props) {
   const { handleResetPassword } = props;
   const [form] = Form.useForm();

   return (
      <div className='forgot-password-form'>
         <Form
            form={form}
            autoComplete='off'
            className='forgot-form--input'
            onFinish={handleResetPassword}
            layout='vertical'
         >
            <Form.Item
               name='email'
               rules={[
                  {
                     required: true,
                     type: 'email',
                  },
               ]}
               label='Email'
            >
               <Input placeholder='Enter your account email' />
            </Form.Item>
            <Form.Item
               name='password'
               label='Password'
               rules={[
                  {
                     required: true,
                     message: 'Please input your password!',
                  },
               ]}
               hasFeedback
            >
               <Input.Password placeholder='Enter your new password' />
            </Form.Item>

            <Form.Item
               name='password_confirmation'
               label='Confirm Password'
               dependencies={['password']}
               hasFeedback
               rules={[
                  {
                     required: true,
                     message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                     validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                           return Promise.resolve();
                        }
                        return Promise.reject(
                           new Error(
                              'The two passwords that you entered do not match!'
                           )
                        );
                     },
                  }),
               ]}
            >
               <Input.Password placeholder='Re-enter your new password' />
            </Form.Item>
            <Form.Item className='forgot-form--submit'>
               <Button type='primary' htmlType='submit' block>
                  Submit
               </Button>
            </Form.Item>
         </Form>
      </div>
   );
}

export default ResetPasswordForm;
