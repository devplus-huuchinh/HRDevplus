import React from 'react';
import PropTypes from 'prop-types';
import { Table, Avatar, Select, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

TableProfile.propTypes = {
   profiles: PropTypes.array,
   step: PropTypes.array,
   // status: PropTypes.array,
   editProfile: PropTypes.func,
   handleSingleRow: PropTypes.func,
   handleMultiRow: PropTypes.func,
   setSelected: PropTypes.array,
   tableLoading: PropTypes.bool,
   handleNextStep: PropTypes.func,
   handleReject: PropTypes.func,
};

function TableProfile(props) {
   //PROPS
   const {
      profiles,
      // status,
      step,
      editProfile,
      handleSingleRow,
      handleMultiRow,
      selected,
      tableLoading,
      handleNextStep,
      handleReject,
   } = props;

   //USE HISTORY
   const history = useHistory();

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
         title: 'Step',
         // dataIndex: 'step',
         render: (record) => (
            <Select
               value={record.step}
               style={{ width: 120 }}
               onChange={(value) => editProfile(record.id, value)}
               disabled={record.status === 'REJECT' ? true : false}
            >
               {step.length > 0 &&
                  step.map((item) => (
                     <Option key={item.key} value={item.value}>
                        {item.value}
                     </Option>
                  ))}
            </Select>
         ),
      },
      {
         title: 'Status',
         // dataIndex: 'status',
         render: (record) =>
            record.status === 'REJECT' ? (
               <p style={{ color: 'red' }}>{record.status}</p>
            ) : (
               <p>{record.status}</p>
            ),
      },
      {
         title: 'Detail',
         dataIndex: 'id',
         render: (record) => (
            <Button type='ghost' onClick={() => handleShowDetail(record)}>
               Detail
            </Button>
         ),
      },
      {
         title: 'Actions',
         render: (record) => (
            <div>
               <Button
                  disabled={
                     record.step === 'EMPLOYEE' || record.status === 'REJECT'
                        ? true
                        : false
                  }
                  type='primary'
                  style={{ marginRight: '10px' }}
                  onClick={() => handleNextStep(record.id, record.step)}
               >
                  Accept
               </Button>
               <Button
                  disabled={
                     record.status === 'REJECT' || record.step === 'EMPLOYEE'
                        ? true
                        : false
                  }
                  type='ghost'
                  onClick={() => handleReject(record.id)}
               >
                  Reject
               </Button>
            </div>
         ),
      },
   ];

   const rowSelection = {
      selectedRowKeys: selected.map((i) => i.id),
      getCheckboxProps: (record) => ({
         disabled: record.name === 'Disabled User',
         name: record.name,
      }),
      onSelect: (record, selected, selectedRows, nativeEvent) => {
         handleSingleRow(selected, record);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
         handleMultiRow(selected, changeRows);
      },
   };

   //Drop list
   const { Option } = Select;

   const handleShowDetail = (id) => {
      return history.push(`/dashboard/profile/detail/${id}`);
   };

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
            loading={tableLoading}
            pagination={false}
         />
      </div>
   );
}

export default TableProfile;
