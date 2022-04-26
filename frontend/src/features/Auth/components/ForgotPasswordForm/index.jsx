import { Button, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import './ForgotPasswordForm.scss';

ForgotPasswordForm.propTypes = {
   handleForgotPasswordSubmit: PropTypes.func,
};

ForgotPasswordForm.defaultProps = {
   handleForgotPasswordSubmit: null,
};

function ForgotPasswordForm(props) {
   const [form] = Form.useForm();
   const { handleForgotPasswordSubmit } = props;

   return (
      <div className='forgot-password-form'>
         <Form
            form={form}
            autoComplete='off'
            className='forgot-form--input'
            onFinish={handleForgotPasswordSubmit}
            layout='vertical'
         >
            <Form.Item
               label='Email'
               name='email'
               rules={[{ required: true, type: 'email' }]}
            >
               <Input placeholder='Please enter your account email' />
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

export default ForgotPasswordForm;
