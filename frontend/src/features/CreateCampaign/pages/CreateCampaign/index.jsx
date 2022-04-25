import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { Layout } from 'antd';
import { Form, Input, Button, Select, DatePicker, TreeSelect, Tag } from 'antd';
import { Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
// import FormItem from 'antd/lib/form/FormItem';
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
            style={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
            }}
         >
            {/* <Form>
               <Form.Item label='Campaign Name'>
                  <Input />
               </Form.Item>
               <Form.Item label='Address'>
                  <Input className='input-address' />
               </Form.Item>
               <Form.Item label='Position'>
                  <Select>
                     <Select.Option value='demo'>Intern</Select.Option>
                     <Select.Option value='demo'>Fresher</Select.Option>
                  </Select>
               </Form.Item>
               <Form.Item label='Technology'>
                  <TreeSelect
                     treeData={[
                        {
                           title: 'Intern',
                           value: 'Intern',
                           children: [
                              { title: 'Java', value: 'Java' },
                              { title: 'Js', value: 'Js' },
                           ],
                        },
                        {
                           title: 'Fresher',
                           value: 'Fresher',
                           children: [
                              { title: 'Java', value: 'Java' },
                              { title: 'Js', value: 'Js' },
                           ],
                        },
                     ]}
                  />
               </Form.Item>
               <Form.Item label='Start Date'>
                  <DatePicker />
               </Form.Item>
               <Form.Item label='End Date'>
                  <DatePicker />
               </Form.Item>
               <Form.Item label='Description'>
                  <TextArea
                     showCount
                     maxLength={1000}
                     style={{ height: 200 }}
                  />
               </Form.Item>
               <Form.Item label='Image'>
                  <Upload>
                     <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
               </Form.Item>
               <Button type='primary' shape='round'>
                  Create
               </Button>
            </Form> */}
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
               <Form.Item label=' '>
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
