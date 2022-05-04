import React from 'react';
import PropTypes from 'prop-types';
import { Table, Avatar, Select, Button, Popconfirm } from 'antd';
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
   ActiveConfirmModal: PropTypes.func,
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
      ActiveConfirmModal,
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
               onChange={(value) => {
                  ActiveConfirmModal(
                     record.id,
                     value,
                     record.last_name,
                     record.first_name
                  );
               }}
               // onChange={(value) => editProfile(record.id, value)}
               disabled={
                  record.status === 'REJECT' || record.step === 'EMPLOYEE'
                     ? true
                     : false
               }
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
            ) : record.status === 'APPROVE' ? (
               <p style={{ color: 'green' }}>{record.status}</p>
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
               <Popconfirm
                  placement='topLeft'
                  title='Are you sure?'
                  onConfirm={() => handleNextStep(record.id, record.step)}
                  okText='Yes'
                  cancelText='No'
                  disabled={
                     record.step === 'EMPLOYEE' || record.status === 'REJECT'
                        ? true
                        : false
                  }
               >
                  <Button
                     disabled={
                        record.step === 'EMPLOYEE' || record.status === 'REJECT'
                           ? true
                           : false
                     }
                     style={
                        record.step === 'EMPLOYEE' || record.status === 'REJECT'
                           ? {
                                backgroundColor: '#eee',
                                marginRight: '10px',
                                color: '#B8B8B8',
                             }
                           : {
                                marginRight: '10px',
                                backgroundColor: '#4c956c',
                                color: '#fff',
                             }
                     }
                  >
                     Accept
                  </Button>
               </Popconfirm>
               <Popconfirm
                  placement='topLeft'
                  title='Are you sure?'
                  onConfirm={() => handleReject(record.id)}
                  okText='Yes'
                  cancelText='No'
                  disabled={
                     record.status === 'REJECT' || record.step === 'EMPLOYEE'
                        ? true
                        : false
                  }
               >
                  <Button
                     disabled={
                        record.status === 'REJECT' || record.step === 'EMPLOYEE'
                           ? true
                           : false
                     }
                     style={
                        record.status === 'REJECT' || record.step === 'EMPLOYEE'
                           ? { backgroundColor: '#eee', color: '#B8B8B8' }
                           : {
                                backgroundColor: '#e63946',
                                color: '#fff',
                             }
                     }
                  >
                     Reject
                  </Button>
               </Popconfirm>
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
