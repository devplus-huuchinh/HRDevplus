import {
   Button,
   Col,
   Form,
   Input,
   InputNumber,
   Row,
   Select,
   Space,
   Tag,
   Upload,
   DatePicker,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React from 'react';
import PropTypes from 'prop-types';
import Editor from '../../../../UI/Editor/Editor';
import '../../pages/CreateCampaign/CreateCampaign.scss';

CampaignForm.propTypes = {
   onFinish: PropTypes.func,
   dropList: PropTypes.object,
   normFile: PropTypes.func,
   uploadCampaignImgToFirebase: PropTypes.func,
   handleEditor: PropTypes.func,
   initialValues: PropTypes.object,
   isEdit: PropTypes.bool,
};

const { Option } = Select;
const { RangePicker } = DatePicker;

function CampaignForm(props) {
   const {
      onFinish,
      dropList,
      normFile,
      uploadCampaignImgToFirebase,
      handleEditor,
      initialValues,
      isEdit,
   } = props;

   return (
      <div>
         <Form
            name='basic'
            initialValues={initialValues ? initialValues : { quantity: 1 }}
            onFinish={onFinish}
            autoComplete='off'
            className='form__create'
         >
            <Space direction='vertical' size={12} style={{ display: 'flex' }}>
               <Form.Item
                  label='Campaign name:'
                  name='name'
                  rules={[
                     {
                        required: true,
                        message: 'Please input campaign name!',
                     },
                  ]}
               >
                  <Input placeholder='Enter campaign name' />
               </Form.Item>

               <Row>
                  <Col span={12}>
                     <Form.Item
                        label='Quantity'
                        name='quantity'
                        rules={[
                           {
                              required: true,
                              message: 'Please input quantity!',
                           },
                        ]}
                     >
                        <InputNumber min='1' />
                     </Form.Item>
                  </Col>
                  <Col span={12}>
                     <Form.Item
                        className='create__date'
                        label='Date'
                        name='date'
                        rules={[
                           {
                              required: true,
                              message: 'Please select date!',
                           },
                        ]}
                     >
                        <RangePicker />
                     </Form.Item>
                  </Col>
               </Row>
               <Form.Item
                  label='Position'
                  name='position'
                  rules={[
                     {
                        required: true,
                        message: 'Please pick positions!',
                     },
                  ]}
               >
                  <Select
                     mode='multiple'
                     style={{ width: '100%' }}
                     placeholder='Select position'
                     optionLabelProp='label'
                     allowClear
                  >
                     {dropList
                        ? dropList.position?.map((item) => (
                             <Option
                                key={item.id}
                                value={item.id}
                                label={item.name}
                             >
                                <Tag>{item.name}</Tag>
                             </Option>
                          ))
                        : ''}
                  </Select>
               </Form.Item>
               <Form.Item
                  label='Technologies'
                  name='technique'
                  rules={[
                     {
                        required: true,
                        message: 'Please pick technologies!',
                     },
                  ]}
               >
                  <Select
                     mode='multiple'
                     style={{ width: '100%' }}
                     placeholder='Select technologies'
                     optionLabelProp='label'
                     allowClear
                  >
                     {dropList
                        ? dropList.technique?.map((item) => (
                             <Option
                                key={item.id}
                                value={item.id}
                                label={item.name}
                             >
                                <Tag>{item.name}</Tag>
                             </Option>
                          ))
                        : ''}
                  </Select>
               </Form.Item>
               <Form.Item
                  label='Address:'
                  name='address'
                  rules={[
                     {
                        required: true,
                        message: 'Please input address!',
                     },
                  ]}
               >
                  <Input placeholder='Enter your address' />
               </Form.Item>
               {isEdit ? (
                  <></>
               ) : (
                  <>
                     <Form.Item
                        label='Image:'
                        name='image'
                        getValueFromEvent={normFile}
                        valuePropName='fileList'
                        rules={[
                           {
                              required: true,
                              message: 'Please provide image!',
                           },
                        ]}
                     >
                        <Upload
                           customRequest={uploadCampaignImgToFirebase}
                           maxCount={1}
                           showUploadList={true}
                           listType='picture-card'
                           className='avatar-uploader'
                           accept='.jpg, .jpeg, .png'
                        >
                           <div>
                              <PlusOutlined />
                              <div style={{ marginTop: 8 }}>Upload Avatar</div>
                           </div>
                        </Upload>
                     </Form.Item>
                  </>
               )}

               <Form.Item
                  label='Description'
                  name='description'
                  rules={[
                     {
                        required: true,
                        message: 'Please input description!',
                     },
                  ]}
               >
                  <Editor
                     onChange={handleEditor}
                     defaultValue={initialValues?.description}
                  />
               </Form.Item>
               <Space
                  size={12}
                  style={{
                     display: 'flex',
                     justifyContent: 'flex-end',
                     alignItems: 'center',
                  }}
               >
                  <Form.Item>
                     <Button type='ghost'>Back</Button>
                  </Form.Item>
                  <Form.Item>
                     <Button type='primary' htmlType='submit'>
                        Submit
                     </Button>
                  </Form.Item>
               </Space>
            </Space>
         </Form>
      </div>
   );
}

export default CampaignForm;
