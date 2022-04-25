import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Table, Avatar, Tag, Select, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

TableProfile.propTypes = {
   profiles: PropTypes.array,
   step: PropTypes.array,
   status: PropTypes.array,
   editProfile: PropTypes.func,
   handleSelected: PropTypes.func,
};

function TableProfile(props) {
   //PROPS
   const { profiles, status, step, editProfile, handleSelected } = props;
   //STATE
   const columns = [
      {
         title: 'Avatar',
         dataIndex: ['image_url'],
         render: (record) => {
            return (
               <Avatar
                  shape='square'
                  size={50}
                  icon={<UserOutlined />}
                  src={record}
               />
            );
         },
      },
      {
         title: 'Name',
         render: (record) => (
            <div>
               <p>
                  {record.last_name} {record.first_name}
               </p>
               <p>{record.email}</p>
            </div>
         ),
      },
      {
         title: 'Position',
         dataIndex: 'position',
         render: (record) => <Tag color='#55acee'>{record.name}</Tag>,
      },

      {
         title: 'Step',
         // dataIndex: 'step',
         render: (record) => (
            <Select
               defaultValue={record.step}
               style={{ width: 120 }}
               onChange={(value) =>
                  handleChangeStep({ id: record.id, value: value })
               }
            >
               {step &&
                  step.map((item) => (
                     <Option key={item} value={item}>
                        {item}
                     </Option>
                  ))}
            </Select>
         ),
      },
      {
         title: 'Status',
         // dataIndex: 'status',
         render: (record) => (
            <Select
               defaultValue={record.status}
               style={{ width: 120 }}
               onChange={(value) =>
                  handleChangeStatus({ id: record.id, value: value })
               }
            >
               {status &&
                  status.map((item) => (
                     <Option key={item} value={item}>
                        {item}
                     </Option>
                  ))}
            </Select>
         ),
      },
      {
         title: 'Detail',
         // dataIndex: 'detail',
         render: (record) => <Button type='primary'>Detail</Button>,
      },
   ];

   const rowSelection = {
      // onChange: (selectedRowKeys, selectedRows) => {
      //    console.log(
      //       // `selectedRowKeys: ${selectedRowKeys}`,
      //       'selectedRows: ',
      //       selectedRows
      //    );
      // },
      getCheckboxProps: (record) => ({
         disabled: record.name === 'Disabled User',
         // Column configuration not to be checked
         name: record.name,
      }),
      onSelect: (record, selected, selectedRows, nativeEvent) => {
         console.log('record', record);
         console.log('selected', selected);
         console.log('selectedRows', selectedRows);
         console.log('nativeEvent', nativeEvent);
      },
   };

   //Drop list
   const { Option } = Select;

   function handleChangeStep(data) {
      editProfile('step', data);
   }

   function handleChangeStatus(data) {
      editProfile('status', data);
   }

   return (
      <div>
         <Table
            rowSelection={{
               type: 'checkbox',
               ...rowSelection,
            }}
            columns={columns}
            rowKey={(record) => record.id}
            dataSource={profiles}
         />
      </div>
   );
}

export default TableProfile;
