import { Button, Form, Input, Select, Tag } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
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
   const { selected, handleChangeSearchFormData, campaignId, campaign } = props;

   const initialValues = {
      first_name: '',
      email: '',
      phone_numb: '',
      status: [],
   };

   return (
      <div className='search_container'>
         <div>
            <Form
               name='basic'
               autoComplete='off'
               initialValues={initialValues}
               onFinish={handleChangeSearchFormData}
            >
               <Form.Item label='First Name' name='first_name'>
                  <Input />
               </Form.Item>
               <Form.Item label='Email' name='email'>
                  <Input />
               </Form.Item>
               <Form.Item label='Phone' name='phone_numb'>
                  <Input />
               </Form.Item>
               <Form.Item label='Status' name='status'>
                  <Select
                     mode='multiple'
                     allowClear
                     placeholder='Please select'
                     showArrow
                     style={{ width: '200px' }}
                  >
                     <Option key='PENDING'>PENDING</Option>
                     <Option key='PROCESSING'>PROCESSING</Option>
                     <Option key='APPROVE'>APPROVE</Option>
                     <Option key='REJECT'>REJECT</Option>
                  </Select>
               </Form.Item>

               <Form.Item>
                  <Button type='primary' htmlType='submit'>
                     Submit
                  </Button>
               </Form.Item>
            </Form>
         </div>
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
      </div>
   );
}

export default SearchProfiles;
