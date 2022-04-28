import React from 'react';
import PropTypes from 'prop-types';
import { Table, Avatar, Tag, Select, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

TableProfile.propTypes = {
   profiles: PropTypes.array,
   step: PropTypes.array,
   status: PropTypes.array,
   editProfile: PropTypes.func,
   handleSingleRow: PropTypes.func,
   handleMultiRow: PropTypes.func,
   setSelected: PropTypes.array,
   tableLoading: PropTypes.bool,
};

function TableProfile(props) {
   //PROPS
   const {
      profiles,
      status,
      step,
      editProfile,
      handleSingleRow,
      handleMultiRow,
      selected,
      tableLoading,
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
         dataIndex: 'id',
         render: (record) => (
            <Button type='primary' onClick={() => handleShowDetail(record)}>
               Detail
            </Button>
         ),
      },
   ];

   const rowSelection = {
      selectedRowKeys: selected.map[(1, 2)],
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

   function handleChangeStep(data) {
      editProfile('step', data);
   }

   function handleChangeStatus(data) {
      editProfile('status', data);
   }

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
            pagination={{ pageSize: 5 }}
            loading={tableLoading}
         />
      </div>
   );
}

export default TableProfile;
