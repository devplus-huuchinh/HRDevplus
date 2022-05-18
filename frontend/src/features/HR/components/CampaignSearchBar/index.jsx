import { Button, Col, DatePicker, Form, Input, Row, Select, Space } from 'antd';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
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
   const [collapse, setCollapse] = useState(false);

   const handleChangeCollapse = () => {
      setCollapse(!collapse);
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
            <Space
               direction='vertical'
               size={'small'}
               style={{ display: 'flex' }}
            >
               <Row
                  className={collapse ? '' : 'collapse-hide'}
                  gutter={[16, 16]}
                  wrap
               >
                  {collapse ? (
                     <>
                        <Col xs={24} sm={24} md={12} lg={8}>
                           <Form.Item name='name' label='Name'>
                              <Input placeholder='Enter campaign name' />
                           </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={8}>
                           <Form.Item name='position_campaign' label='Position'>
                              <Select
                                 mode='multiple'
                                 allowClear
                                 placeholder='Please select'
                                 showArrow
                              >
                                 {positions?.map((position) => (
                                    <Option key={position.id}>
                                       {position.name}
                                    </Option>
                                 ))}
                              </Select>
                           </Form.Item>
                        </Col>
                        <Col
                           xs={24}
                           sm={24}
                           md={24}
                           lg={8}
                           style={{ textAlign: 'right' }}
                        >
                           <Space size={'small'} wrap>
                              <Form.Item>
                                 <Button type='primary' htmlType='submit'>
                                    Submit
                                 </Button>
                              </Form.Item>
                              <Form.Item>
                                 <Button onClick={onReset}>Reset</Button>
                              </Form.Item>
                              <Form.Item>
                                 <Button
                                    onClick={handleChangeCollapse}
                                    type='primary'
                                    ghost
                                 >
                                    {collapse ? (
                                       <>
                                          <UpOutlined /> Collapse
                                       </>
                                    ) : (
                                       <>
                                          <DownOutlined /> Expand
                                       </>
                                    )}
                                 </Button>
                              </Form.Item>
                           </Space>
                        </Col>
                     </>
                  ) : (
                     <></>
                  )}
                  {}
               </Row>
               <Row gutter={[16, 16]} wrap>
                  {collapse ? (
                     <>
                        <Col xs={24} sm={24} md={12} lg={8}>
                           <Form.Item name='is_active' label='Status'>
                              <Select
                                 mode='multiple'
                                 allowClear
                                 placeholder='Please select'
                                 showArrow
                              >
                                 {status?.map((stt) => (
                                    <Option key={stt.id}>{stt.name}</Option>
                                 ))}
                              </Select>
                           </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={8}>
                           <Form.Item name='dateRange' label='Date'>
                              <RangePicker />
                           </Form.Item>
                        </Col>
                     </>
                  ) : (
                     <>
                        <Col xs={24} sm={24} md={12} lg={8}>
                           <Form.Item name='name' label='Name'>
                              <Input placeholder='Enter campaign name' />
                           </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={8}>
                           <Form.Item name='position_campaign' label='Position'>
                              <Select
                                 mode='multiple'
                                 allowClear
                                 placeholder='Please select'
                                 showArrow
                              >
                                 {positions?.map((position) => (
                                    <Option key={position.id}>
                                       {position.name}
                                    </Option>
                                 ))}
                              </Select>
                           </Form.Item>
                        </Col>
                        <Col
                           xs={24}
                           sm={24}
                           md={24}
                           lg={8}
                           style={{ textAlign: 'right' }}
                        >
                           <Space size={'small'} wrap>
                              <Form.Item>
                                 <Button type='primary' htmlType='submit'>
                                    Submit
                                 </Button>
                              </Form.Item>
                              <Form.Item>
                                 <Button onClick={onReset}>Reset</Button>
                              </Form.Item>
                              <Form.Item>
                                 <Button
                                    onClick={handleChangeCollapse}
                                    type='primary'
                                    ghost
                                 >
                                    {collapse ? (
                                       <>
                                          <UpOutlined /> Collapse
                                       </>
                                    ) : (
                                       <>
                                          <DownOutlined /> Expand
                                       </>
                                    )}
                                 </Button>
                              </Form.Item>
                           </Space>
                        </Col>
                     </>
                  )}
               </Row>
            </Space>
         </Form>
      </div>
   );
}

export default CampaignSearchBar;
