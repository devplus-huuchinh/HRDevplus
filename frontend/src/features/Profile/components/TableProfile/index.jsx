import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Table, Avatar, Tag, Select, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

TableProfile.propTypes = {};

function TableProfile(props) {
   //STATE
   const columns = [
      {
         title: 'Avatar',
         dataIndex: 'avatar',
         render: (record) => (
            <Avatar shape='square' size={50} icon={<UserOutlined />} />
         ),
      },
      {
         title: 'Name',
         dataIndex: 'name',
         render: (record) => (
            <div>
               <p>user name</p>
               <p>email@gmail.com</p>
            </div>
         ),
      },
      {
         title: 'Position',
         dataIndex: 'position',
         render: (record) => <Tag color='#55acee'>position</Tag>,
      },

      {
         title: 'Step',
         dataIndex: 'step',
         render: (record) => (
            <Select
               defaultValue='lucy'
               style={{ width: 120 }}
               onChange={handleChangeStep}
            >
               <Option value='jack'>Jack</Option>
               <Option value='lucy'>Lucy</Option>
               <Option value='disabled' disabled>
                  Disabled
               </Option>
               <Option value='Yiminghe'>yiminghe</Option>
            </Select>
         ),
      },
      {
         title: 'Status',
         dataIndex: 'status',
         render: (record) => (
            <Select
               defaultValue='lucy'
               style={{ width: 120 }}
               onChange={handleChangeStatus}
            >
               <Option value='jack'>Jack</Option>
               <Option value='lucy'>Lucy</Option>
               <Option value='disabled' disabled>
                  Disabled
               </Option>
               <Option value='Yiminghe'>yiminghe</Option>
            </Select>
         ),
      },
      {
         title: 'Detail',
         dataIndex: 'detail',
         render: (record) => <Button type='primary'>Detail</Button>,
      },
   ];

   // table
   const data = [
      {
         key: '1',
         name: 'John Brown',
         age: 32,
         address: 'New York No. 1 Lake Park',
      },
      {
         key: '2',
         name: 'Jim Green',
         age: 42,
         address: 'London No. 1 Lake Park',
      },
      {
         key: '3',
         name: 'Joe Black',
         age: 32,
         address: 'Sidney No. 1 Lake Park',
      },
   ];

   const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
         console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            'selectedRows: ',
            selectedRows
         );
      },
      getCheckboxProps: (record) => ({
         disabled: record.name === 'Disabled User',
         // Column configuration not to be checked
         name: record.name,
      }),
   };
   //Drop list
   const { Option } = Select;

   function handleChangeStep(value) {
      console.log(`selected ${value}`);
   }
   function handleChangeStatus(value) {
      console.log(`selected ${value}`);
   }

   return (
      <div>
         <Table
            rowSelection={{
               type: 'checkbox',
               ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
         />
      </div>
   );
}

export default TableProfile;
