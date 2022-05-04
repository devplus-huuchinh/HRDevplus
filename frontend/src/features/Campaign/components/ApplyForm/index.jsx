import {
   LoadingOutlined,
   PlusOutlined,
   UploadOutlined,
} from '@ant-design/icons';
import {
   Button,
   Form,
   Image,
   Input,
   Select,
   Space,
   Typography,
   Upload,
} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router';
import './ApplyForm.scss';

ApplyForm.propTypes = {
   handleApplyCampaign: PropTypes.func,
   uploadAvatarToFirebase: PropTypes.func,
   uploadCVToFirebase: PropTypes.func,
};

ApplyForm.defaultProps = {
   handleApplyCampaign: null,
   uploadAvatarToFirebase: null,
   uploadCVToFirebase: null,
};

const { Title } = Typography;
const { Option } = Select;

function ApplyForm(props) {
   const {
      handleApplyCampaign,
      uploadCVToFirebase,
      uploadAvatarToFirebase,
      avatar,
      campaignPosition,
      campaignTechnique,
   } = props;

   let history = useHistory();

   const backToCampaign = () => {
      history.goBack();
   };

   const normFile = (e) => {
      if (Array.isArray(e)) {
         return e;
      }
      return e && e.fileList;
   };

   const initialValues = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      uploadCV: [],
      uploadAvatar: '',
   };

   const uploadButton = (
      <div>
         {avatar.loading ? <LoadingOutlined /> : <PlusOutlined />}
         <div style={{ marginTop: 8 }}>Upload Avatar</div>
      </div>
   );

   return (
      <div className='apply__form--wrapper'>
         <div className='apply__form--container'>
            <Space
               direction='vertical'
               size={'middle'}
               style={{
                  display: 'flex',
                  alignItems: 'center',
                  borderBottom: '1px solid #f0f0f0',
               }}
            >
               <Image
                  preview={false}
                  src={
                     'https://www.devplus.asia/assets/images/devplus/Artboard_2.png'
                  }
                  style={{ width: '100%', maxWidth: '200px' }}
               />
               <Title level={3} className='form__heading'>
                  Please type your information
               </Title>
            </Space>
            <Form
               className='apply__form'
               onFinish={handleApplyCampaign}
               initialValues={initialValues}
            >
               <Space direction='vertical' size={'middle'}>
                  <Form.Item
                     label='Avatar :'
                     name='uploadAvatar'
                     valuePropName='fileList'
                     getValueFromEvent={normFile}
                     rules={[
                        {
                           required: true,
                           message: 'Please upload your Avatar!',
                        },
                     ]}
                  >
                     <Upload
                        customRequest={uploadAvatarToFirebase}
                        maxCount={1}
                        showUploadList={false}
                        listType='picture-card'
                        className='avatar-uploader'
                        accept='.jpg, .jpeg, .png'
                     >
                        {avatar.url ? (
                           <img
                              src={avatar.url}
                              alt='avatar'
                              style={{ width: '100%' }}
                           />
                        ) : (
                           uploadButton
                        )}
                     </Upload>
                  </Form.Item>
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
                     <Input type={'email'} placeholder='type your email...' />
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
                     label='Position'
                     name='position'
                     rules={[
                        {
                           required: true,
                           message: 'Please input your phone position!',
                        },
                     ]}
                  >
                     <Select placeholder='Please select a position'>
                        {campaignPosition?.map((item) => (
                           <Option
                              value={item.pivot.position_id}
                              key={item.pivot.position_id}
                           >
                              {item.name}
                           </Option>
                        ))}
                     </Select>
                  </Form.Item>
                  <Form.Item
                     name='technique'
                     label='Technique'
                     rules={[
                        {
                           required: true,
                           message: 'Please select your technique!',
                           type: 'array',
                        },
                     ]}
                  >
                     <Select
                        mode='multiple'
                        placeholder='Please select favourite technique'
                     >
                        {campaignTechnique?.map((item) => (
                           <Option
                              value={item.pivot.technique_id}
                              key={item.pivot.technique_id}
                           >
                              {item.name}
                           </Option>
                        ))}
                     </Select>
                  </Form.Item>
                  <Form.Item
                     label='Upload CV:'
                     name='uploadCV'
                     valuePropName='fileList'
                     getValueFromEvent={normFile}
                     rules={[
                        {
                           required: true,
                           message: 'Please upload your CV!',
                        },
                     ]}
                  >
                     <Upload
                        listType='text'
                        customRequest={uploadCVToFirebase}
                        maxCount={1}
                        accept='.pdf'
                     >
                        <Button icon={<UploadOutlined />}>
                           Click to upload
                        </Button>
                     </Upload>
                  </Form.Item>
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
