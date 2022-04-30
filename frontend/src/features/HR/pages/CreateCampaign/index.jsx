import { PlusOutlined } from '@ant-design/icons';
import {
   Breadcrumb,
   Button,
   Col,
   DatePicker,
   Form,
   Input,
   InputNumber,
   Layout,
   message,
   Row,
   Select,
   Space,
   Spin,
   Tag,
   Typography,
   Upload,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import campaignApi from '../../../../api/campaignApi';
import uploadFile from '../../../../firebase/uploadFile';
import Editor from '../../../../UI/Editor/Editor';
import { Section } from '../../../Home/components/Section/Section.styles';
import './CreateCampaign.scss';

CreateCampaign.propTypes = {};

const { Title } = Typography;
const { Option } = Select;
const { RangePicker } = DatePicker;

function CreateCampaign(props) {
   const history = useHistory();

   const [description, setDescription] = useState();
   const [loading, setLoading] = useState(false);
   const [dropList, setDropList] = useState();

   useEffect(() => {
      const getDropdownList = async () => {
         const droplistRes = await campaignApi.getDroplist();
         setDropList(droplistRes);
      };
      getDropdownList();
   }, []);
   //Select

   const handleEditor = (value) => {
      setDescription(value);
   };

   const onFinish = async (values) => {
      setLoading(true);
      const newData = {
         ...values,
         name: values.name,
         address: values.address,
         start_date: values.date[0].format('YYYY-MM-DD HH:mm:ss'),
         end_date: values.date[1].format('YYYY-MM-DD HH:mm:ss'),
         quantity: values.quantity,
         description: description,
         image_url: values.image[0].xhr,
      };

      const response = await campaignApi.newCampaign(newData);
      setLoading(false);

      if (response === true) {
         message.success('Create successfully');
         return history.goBack();
      }

      message.error('Create successfully');
   };

   const normFile = (e) => {
      if (Array.isArray(e)) {
         return e.file.xhr;
      }
      return e && e.fileList;
   };

   const uploadCampaignImgToFirebase = async (options) => {
      const { file, onSuccess, onError } = options;
      const fileUrl = await uploadFile({
         file,
         onSuccess,
         onError,
         directory: 'campaigns',
      });
      console.log('🚀 ~ fileUrl', fileUrl);
   };

   return (
      <>
         <div className='create__breadcrumb'>
            <Breadcrumb>
               <Breadcrumb.Item>Home</Breadcrumb.Item>
               <Breadcrumb.Item>
                  <a href='# '>Application Center</a>
               </Breadcrumb.Item>
               <Breadcrumb.Item>
                  <a href='# '>Application List</a>
               </Breadcrumb.Item>
               <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
         </div>
         <Section style={{ padding: '30px 20px' }}>
            <Spin spinning={loading}>
               <Layout>
                  <div className='content__create'>
                     <Title className='create__heading' level={3}>
                        Create Campaign
                     </Title>
                     <Form
                        name='basic'
                        initialValues={{ quantity: 1 }}
                        onFinish={onFinish}
                        autoComplete='off'
                        className='form__create'
                     >
                        <Space
                           direction='vertical'
                           size={12}
                           style={{ display: 'flex' }}
                        >
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
                                 placeholder='select position'
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
                                 placeholder='select technologies'
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
                              <Input />
                           </Form.Item>
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
                                    <div style={{ marginTop: 8 }}>
                                       Upload Avatar
                                    </div>
                                 </div>
                              </Upload>
                           </Form.Item>
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
                              <Editor onChange={handleEditor} />
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
               </Layout>
            </Spin>
         </Section>
      </>
   );
}

export default CreateCampaign;
