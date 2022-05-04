import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select, Space, Tag } from 'antd';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import ExportExcel from '../ExportExcel/index';
import './searchProfile.scss';

SearchProfiles.propTypes = {
   selected: PropTypes.array,
   handleChangeSearchFormData: PropTypes.func,
   campaignId: PropTypes.string,
   campaign: PropTypes.object,
};

const { Option } = Select;

function SearchProfiles(props) {
   const { selected, handleChangeSearchFormData, campaign } = props;

   const initialValues = {
      first_name: '',
      email: '',
      phone_numb: '',
      status: [],
   };
   const [collapse, setCollapse] = useState(false);

   const handleChangeCollapse = () => {
      setCollapse(!collapse);
   };
   const formRef = useRef(null);
   const [form] = Form.useForm();
   const onReset = () => {
      formRef.current.resetFields();
      handleChangeSearchFormData(initialValues);
   };
   return (
      <div className='search_container'>
         <Space direction='vertical' size={'small'} style={{ display: 'flex' }}>
            <div>
               <Form
                  ref={formRef}
                  form={form}
                  name='basic'
                  autoComplete='off'
                  initialValues={initialValues}
                  onFinish={handleChangeSearchFormData}
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
                                 <Form.Item label='Phone' name='phone_numb'>
                                    <Input />
                                 </Form.Item>
                              </Col>
                              <Col xs={24} sm={24} md={12} lg={8}>
                                 <Form.Item label='Email' name='email'>
                                    <Input />
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
                     </Row>
                     <Row gutter={[16, 16]} wrap>
                        {collapse ? (
                           <>
                              <Col xs={24} sm={24} md={12} lg={8}>
                                 <Form.Item label='Name' name='first_name'>
                                    <Input />
                                 </Form.Item>
                              </Col>
                              <Col xs={24} sm={24} md={12} lg={8}>
                                 <Form.Item label='Status' name='status'>
                                    <Select
                                       mode='multiple'
                                       allowClear
                                       placeholder='Please select'
                                       showArrow
                                       style={{ width: '100%' }}
                                    >
                                       <Option key='PENDING'>PENDING</Option>
                                       <Option key='PROCESSING'>
                                          PROCESSING
                                       </Option>
                                       <Option key='APPROVE'>APPROVE</Option>
                                       <Option key='REJECT'>REJECT</Option>
                                    </Select>
                                 </Form.Item>
                              </Col>
                           </>
                        ) : (
                           <>
                              <Col xs={24} sm={24} md={12} lg={8}>
                                 <Form.Item label='Phone' name='phone_numb'>
                                    <Input />
                                 </Form.Item>
                              </Col>
                              <Col xs={24} sm={24} md={12} lg={8}>
                                 <Form.Item label='Email' name='email'>
                                    <Input />
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
            <hr />
            <div className='search__rightside_wrap'>
               {selected.length !== 0 ? (
                  <Tag className='search__selected_tag' color='geekblue'>
                     {selected.length === 1
                        ? '1 user selected'
                        : `${selected.length} users selected`}
                  </Tag>
               ) : (
                  ''
               )}

               <ExportExcel
                  className='search__export'
                  data={selected}
                  campaign={campaign}
                  fileName='Profiles'
               />
            </div>
         </Space>
      </div>
   );
}

export default SearchProfiles;
