import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import './CampaignSearchBar.scss';

CampaignSearchBar.propTypes = {
   searchToolbar: PropTypes.array,
   status: PropTypes.array,
   handleOnFinishSearch: PropTypes.func,
};

CampaignSearchBar.defaultProps = {
   searchToolbar: [],
   status: [],
   handleOnFinishSearch: null,
};

const { Option } = Select;
const { RangePicker } = DatePicker;

function CampaignSearchBar(props) {
   const { positions, status, handleOnFinishSearch } = props;
   const formRef = useRef(null);

   const [form] = Form.useForm();

   const initialValues = {
      name: '',
      position_campaign: [],
      is_active: [],
      dateRange: [],
      campaign_technique: [],
   };

   const onReset = () => {
      formRef.current.resetFields();
      handleOnFinishSearch(initialValues);
   };

   return (
      <div className='hr-search'>
         <Form
            form={form}
            style={{ width: '100%' }}
            onFinish={handleOnFinishSearch}
            initialValues={initialValues}
            ref={formRef}
         >
            <Row style={{ width: '100%' }}>
               <Col span={12}>
                  <Form.Item name='name' label='Name'>
                     <Input placeholder='Enter campaign name' />
                  </Form.Item>
               </Col>
               <Col span={12}>
                  <Form.Item name='position_campaign' label='Position'>
                     <Select
                        mode='multiple'
                        allowClear
                        placeholder='Please select'
                        style={{ width: 200 }}
                        showArrow
                     >
                        {positions?.map((tool) => (
                           <Option key={tool.id}>{tool.name}</Option>
                        ))}
                     </Select>
                  </Form.Item>
               </Col>
            </Row>
            <Row style={{ width: '100%' }}>
               <Col span={8}>
                  <Form.Item name='is_active' label='Status'>
                     <Select
                        mode='multiple'
                        allowClear
                        placeholder='Please select'
                        style={{ width: 200 }}
                        showArrow
                     >
                        {status?.map((tool) => (
                           <Option key={tool.id}>{tool.name}</Option>
                        ))}
                     </Select>
                  </Form.Item>
               </Col>
               <Col span={8}>
                  <Form.Item name='dateRange' label='Date'>
                     <RangePicker />
                  </Form.Item>
               </Col>
               <Col span={8}>
                  <Form.Item>
                     <Button type='primary' htmlType='submit'>
                        Submit
                     </Button>
                  </Form.Item>
                  <Form.Item>
                     <Button onClick={onReset}>Reset</Button>
                  </Form.Item>
               </Col>
            </Row>
         </Form>
      </div>
   );
}

export default CampaignSearchBar;
