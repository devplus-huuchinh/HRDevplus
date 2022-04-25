import { Button, Form, Input } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import './ChangePasswordForm.scss';

ChangePasswordForm.propTypes = {
   handleSubmitChangePassword: PropTypes.func,
};

ChangePasswordForm.defaultProps = {
   handleSubmitChangePassword: null,
};

function ChangePasswordForm(props) {
   const { handleSubmitChangePassword } = props;

   const initialValues = {
      old_password: '',
      new_password: '',
   };
   return (
      <div>
         <Form
            name='basic'
            initialValues={initialValues}
            onFinish={handleSubmitChangePassword}
            className='change-password-form'
         >
            <label className='form-label--item'>Old Password</label>
            <Form.Item
               className='form--item'
               name='old_password'
               rules={[
                  {
                     required: true,
                     message: 'Please input your old password!',
                  },
               ]}
            >
               <Input.Password
                  className='form-input'
                  placeholder='Enter your old password'
               />
            </Form.Item>

            <label className='form-label--item'>New Password</label>
            <Form.Item
               className='form--item'
               name='new_password'
               rules={[
                  {
                     required: true,
                     message: 'Please input your new password!',
                  },
               ]}
            >
               <Input.Password
                  className='form-input'
                  placeholder='Enter your new password'
               />
            </Form.Item>

            <Form.Item>
               <Button type='primary' htmlType='submit'>
                  Submit
               </Button>
            </Form.Item>
         </Form>
      </div>
   );
}

export default ChangePasswordForm;
