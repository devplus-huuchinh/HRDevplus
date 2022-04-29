import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
   Button,
   DatePicker,
   Form,
   Input,
   InputNumber,
   Layout,
   Select,
   Tag,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import campaignApi from '../../../../api/campaignApi';
import './index.scss';

CreateCampaign.propTypes = {};

const { Header, Content } = Layout;

function CreateCampaign(props) {
   let history = useHistory();
   const [description, setDescription] = useState();
   const [dropList, setDropList] = useState();
   useEffect(() => {
      const getDropdownList = async () => {
         const droplistRes = await campaignApi.getDroplist();
         console.log(droplistRes);
         setDropList(droplistRes);
      };
      getDropdownList();
   }, []);
   //Select
   const { Option } = Select;

   const handleEditor = (event, editor) => {
      const data = editor.getData();
      // console.log({ event, editor, data });
      setDescription(data);
   };

   const onFinish = async (values) => {
      const newData = {
         ...values,
         name: values.name,
         address: values.address,
         start_date: values.date[0].format('YYYY-MM-DD HH:mm:ss'),
         end_date: values.date[1].format('YYYY-MM-DD HH:mm:ss'),
         quantity: values.quantity,
         description: description,
         image_url:
            'https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg',
      };
      console.log('NEW', newData);

      const create = await campaignApi.newCampaign(newData);
      console.log(create);
   };

   // const handleSubmit = async (data) => {
   //    return await campaignApi.campaignApi(data);
   // };
   //Date picker
   const { RangePicker } = DatePicker;
   return (
      <Layout>
         <Header style={{ backgroundColor: 'white', textDecoration: 'bold' }}>
            <div onClick={() => history.goBack()} style={{ cursor: 'pointer' }}>
               Back to manage page
            </div>
         </Header>
         <Content>
            <Form
               name='basic'
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
               initialValues={{ quantity: 1 }}
               onFinish={onFinish}
               autoComplete='off'
            >
               <Form.Item
                  label='Campaign name:'
                  name='name'
                  rules={[
                     { required: true, message: 'Please input campaign name!' },
                  ]}
               >
                  <Input />
               </Form.Item>
               {/* <Form.Item
                  label='Image:'
                  name='image'
                  rules={[{ required: true, message: 'Please provide image!' }]}
               >
                  <Upload>
                     <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
               </Form.Item> */}
               <Form.Item
                  label='Date'
                  name='date'
                  rules={[{ required: true, message: 'Please select date!' }]}
               >
                  <RangePicker />
               </Form.Item>
               <Form.Item
                  label='Position'
                  name='position'
                  rules={[
                     { required: true, message: 'Please pick positions!' },
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
                     { required: true, message: 'Please pick technologies!' },
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
                  label='Quantity'
                  name='quantity'
                  rules={[
                     { required: true, message: 'Please input quantity!' },
                  ]}
               >
                  <InputNumber min='1' />
               </Form.Item>
               <Form.Item
                  label='Address:'
                  name='address'
                  rules={[{ required: true, message: 'Please input address!' }]}
               >
                  <Input />
               </Form.Item>
               <Form.Item
                  label='Description'
                  name='description'
                  rules={[
                     { required: true, message: 'Please input description!' },
                  ]}
               >
                  <CKEditor editor={ClassicEditor} onChange={handleEditor} />
               </Form.Item>
               <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type='primary' htmlType='submit'>
                     Submit
                  </Button>
               </Form.Item>
            </Form>
         </Content>
      </Layout>
   );
}

export default CreateCampaign;
