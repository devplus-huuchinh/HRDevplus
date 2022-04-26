import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { Layout } from 'antd';
import { Form, Input, Button, Select, DatePicker, TreeSelect, Tag } from 'antd';
import { Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const { Header, Content } = Layout;
const { TextArea } = Input;
CreateCampaign.propTypes = {};
function CreateCampaign(props) {
   return (
      <Layout>
         <Header style={{ backgroundColor: 'white', textDecoration: 'bold' }}>
            Crate Campaign
         </Header>
         <Content
         // style={{
         //    display: 'flex',
         //    flexDirection: 'column',
         //    alignItems: 'center',
         // }}
         >
            <Form
               name='wrap'
               labelCol={{ flex: '110px' }}
               labelAlign='left'
               labelWrap
               wrapperCol={{ flex: 1 }}
               colon={false}
            >
               <Form.Item label='Campaign Name' rules={[{ required: true }]}>
                  <Input />
               </Form.Item>
               <Form.Item label='Address' rules={[{ required: true }]}>
                  <Input />
               </Form.Item>
               <Form.Item label='Position'>
                  <Select>
                     <Select.Option value='demo'>
                        {' '}
                        <Tag color='magenta'>magenta</Tag>
                     </Select.Option>
                     <Select.Option value='demo'>
                        {' '}
                        <Tag color='magenta'>magenta</Tag>
                     </Select.Option>
                  </Select>
               </Form.Item>
               <Form.Item label='Technology'>
                  <Select>
                     <Select.Option value='demo'>
                        {' '}
                        <Tag color='magenta'>magenta</Tag>
                     </Select.Option>
                     <Select.Option value='demo'>
                        {' '}
                        <Tag color='magenta'>magenta</Tag>
                     </Select.Option>
                  </Select>
               </Form.Item>
               <Form.Item label='Start Date'>
                  <DatePicker />
               </Form.Item>
               <Form.Item label='End Date'>
                  <DatePicker />
               </Form.Item>
               <Form.Item label='Image'>
                  <Upload>
                     <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
               </Form.Item>
               <Form.Item label='Description'>
                  <CKEditor
                     editor={ClassicEditor}
                     data='<p>Hello from CKEditor 5!</p>
                     <p>Hello from CKEditor 5!</p>
                     <p>Hello from CKEditor 5!</p>
                     <p>Hello from CKEditor 5!</p>
                     <p>Hello from CKEditor 5!</p>
                     <p>Hello from CKEditor 5!</p>'
                     onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                     }}
                     onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                     }}
                     onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                     }}
                     onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                     }}
                  />
               </Form.Item>
               <Form.Item label=' '>
                  <Button type='primary' htmlType='submit'>
                     Create
                  </Button>
               </Form.Item>
            </Form>
         </Content>
      </Layout>
   );
}

export default CreateCampaign;
