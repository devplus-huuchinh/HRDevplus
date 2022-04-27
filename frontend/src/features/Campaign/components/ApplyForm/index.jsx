import React from 'react';
import { Form, Input, Button, Typography, Row, Col, Upload, Space } from 'antd';
import { UploadOutlined, PlusOutlined } from '@ant-design/icons';
import './ApplyForm.scss';
import { useHistory, useParams } from 'react-router';

const { Title } = Typography;

function ApplyForm(props) {
   const { campaignId } = useParams();

   const history = useHistory();
   const backToCampaign = () => {
      history.push(`/campaign/${campaignId}`);
   };
   return (
      <div className='apply__form--wrapper'>
         <div className='apply__form--container'>
            <Title level={3} className='form__heading'>
               Apply for this campaign
            </Title>
            <Form className='apply__form'>
               <Space direction='vertical' size={'middle'}>
                  <Row>
                     <Col xs={24} sm={24} md={6} lg={6}>
                        <Upload
                           name='avatar'
                           listType='picture-card'
                           className='avatar-uploader'
                           showUploadList={false}
                        >
                           <div>
                              <PlusOutlined />
                              <div style={{ marginTop: 8 }}>Upload Image</div>
                           </div>
                        </Upload>
                     </Col>
                     <Col xs={24} sm={24} md={18} lg={18}>
                        <Space direction='vertical' size={'small'}>
                           <Form.Item
                              label='First name:'
                              name='firstName'
                              rules={[
                                 {
                                    required: true,
                                    message: 'Please input your first name!',
                                 },
                              ]}
                           >
                              <Input placeholder='type your first name...' />
                           </Form.Item>
                           <Form.Item
                              label='Last name:'
                              name='lastName'
                              rules={[
                                 {
                                    required: true,
                                    message: 'Please input your last name!',
                                 },
                              ]}
                           >
                              <Input placeholder='type your last name...' />
                           </Form.Item>
                           <Form.Item
                              label='Email:'
                              name='email'
                              rules={[
                                 {
                                    required: true,
                                    message: 'Please input your email!',
                                 },
                              ]}
                           >
                              <Input
                                 type={'email'}
                                 placeholder='type your email...'
                              />
                           </Form.Item>
                           <Form.Item
                              label='Phone number:'
                              name='phoneNumber'
                              rules={[
                                 {
                                    required: true,
                                    message: 'Please input your phone number!',
                                 },
                              ]}
                           >
                              <Input
                                 type={'text'}
                                 placeholder='type your phone number...'
                              />
                           </Form.Item>
                           <Form.Item
                              label='Upload CV:'
                              name='upLoadCV'
                              rules={[
                                 {
                                    required: true,
                                    message: 'Please upload your CV!',
                                 },
                              ]}
                           >
                              <Upload {...props} className='form__upload'>
                                 <Button icon={<UploadOutlined />}>
                                    Click to Upload
                                 </Button>
                              </Upload>
                           </Form.Item>
                        </Space>
                     </Col>
                  </Row>
                  <div className='form__button--wrap'>
                     <Button danger onClick={() => backToCampaign()}>
                        Back
                     </Button>

                     <Button type='primary' htmlType='submit'>
                        Apply
                     </Button>
                  </div>
               </Space>
            </Form>
         </div>
      </div>
   );
}

export default ApplyForm;
