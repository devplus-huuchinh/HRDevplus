import React from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './ApplyForm.scss';

const { Text, Title } = Typography;

function ApplyForm(props) {
   return (
      <div className='apply__form--wrapper'>
         <div className='form__wrapper'>
            <Title level={3}>Apply for a job</Title>
            <Form className='apply__form'>
               <Form.Item>
                  <Text>First Name:</Text>
                  <Input placeholder='Username' />
               </Form.Item>
               <Form.Item>
                  <Text>Last Name:</Text>
                  <Input placeholder='Username' />
               </Form.Item>
               <Form.Item>
                  <Text>Email</Text>
                  <Input placeholder='Username' />
               </Form.Item>
               <Form.Item>
                  <Text>Phone Number</Text>
                  <Input placeholder='Username' />
               </Form.Item>
            </Form>
         </div>
      </div>
   );
}

export default ApplyForm;
