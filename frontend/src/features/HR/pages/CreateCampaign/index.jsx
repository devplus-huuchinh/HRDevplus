import { Layout, message, Spin, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import campaignApi from '../../../../api/campaignApi';
import uploadFile from '../../../../firebase/uploadFile';
import Breadcrumbs from '../../../Home/components/BreadCrumb';
import { Section } from '../../../Home/components/Section/Section.styles';
import CampaignForm from '../../components/CampaignForm';
import './CreateCampaign.scss';

CreateCampaign.propTypes = {};

const { Title } = Typography;

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

      message.error('Create failed');
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
            <Breadcrumbs />
         </div>
         <Section style={{ padding: '30px 20px' }}>
            <Spin spinning={loading}>
               <Layout>
                  <div className='content__create'>
                     <Title className='create__heading' level={3}>
                        Create Campaign
                     </Title>
                     <CampaignForm
                        dropList={dropList}
                        onFinish={onFinish}
                        normFile={normFile}
                        uploadCampaignImgToFirebase={
                           uploadCampaignImgToFirebase
                        }
                        handleEditor={handleEditor}
                     />
                     {/* <Form
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
                     </Form> */}
                  </div>
               </Layout>
            </Spin>
         </Section>
      </>
   );
}

export default CreateCampaign;
