import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import campaignApi from '../../../../api/campaignApi';
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
   // recive all data state
   const [data, setData] = useState({});
   const [positionData, setPosition] = useState([]);
   // name value
   const [inputName, setInputName] = useState('');
   // address value
   const [inputAddress, setInputAddress] = useState('');
   // position value
   const [position, setPositionValue] = useState([]);
   // start date value
   const [startDate, setStartDate] = useState();
   // end date value
   const [endDate, setEndDate] = useState();
   // description value
   const [description, setDescription] = useState();
   useEffect(() => {
      const handlePosition = async () => {
         try {
            const db = await campaignApi.getPositionForHr();
            setPosition(db);
         } catch (error) {
            console.log(error);
         }
      };
      handlePosition();
   }, []);
   const handlePosition = (value) => {
      // console.log(value);
      setPositionValue((preState) => [...preState, value]);
   };
   const handleInputName = (e) => setInputName(e.target.value);
   const handleInputAddress = (e) => setInputAddress(e.target.value);
   const handleStartDate = (date, dateString) => {
      // console.log(date, dateString);
      setStartDate(dateString);
   };
   const handleEndDate = (date, dateString) => {
      // console.log(date, dateString);
      setEndDate(dateString);
   };
   const handleEditor = (event, editor) => {
      const data = editor.getData();
      // console.log({ event, editor, data });
      setDescription(data);
   };
   const handleData = async (data) => {
      const dbRes = await campaignApi.postCampaignForHr({
         inputName,
         inputAddress,
         position,
         startDate,
         endDate,
         description,
      });
      console.log(dbRes);
   };
   // console.log(data);
   // console.log(position);
   // console.log(inputs);
   // console.log(startDate);
   return (
      <Layout>
         <Header style={{ backgroundColor: 'white', textDecoration: 'bold' }}>
            Crate Campaign
         </Header>
         <Content>
            <Form
               name='wrap'
               labelCol={{ flex: '110px' }}
               labelAlign='left'
               labelWrap
               wrapperCol={{ flex: 1 }}
               colon={false}
            >
               <Form.Item label='Campaign Name' rules={[{ required: true }]}>
                  <Input name='name' onChange={handleInputName} />
               </Form.Item>
               <Form.Item label='Address' rules={[{ required: true }]}>
                  <Input name='address' onChange={handleInputAddress} />
               </Form.Item>
               <Form.Item label='Position'>
                  <Select name='position' onChange={handlePosition}>
                     {positionData.map((data) => {
                        return (
                           <Select.Option key={data.id} value={data.id}>
                              {data.name}
                           </Select.Option>
                        );
                     })}
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
                  <DatePicker
                     // name='startDate'
                     onChange={handleStartDate}
                     format={'YYYY-MM-DD'}
                  />
               </Form.Item>
               <Form.Item label='End Date'>
                  <DatePicker
                     // name='endDate'
                     onChange={handleEndDate}
                     format={'YYYY-MM-DD'}
                  />
               </Form.Item>
               <Form.Item label='Image'>
                  <Upload>
                     <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
               </Form.Item>
               <Form.Item label='Description'>
                  <CKEditor editor={ClassicEditor} onChange={handleEditor} />
               </Form.Item>
               <Form.Item label=' '>
                  <Button type='primary' htmlType='submit' onClick={handleData}>
                     Create
                  </Button>
               </Form.Item>
            </Form>
         </Content>
      </Layout>
   );
}

export default CreateCampaign;
