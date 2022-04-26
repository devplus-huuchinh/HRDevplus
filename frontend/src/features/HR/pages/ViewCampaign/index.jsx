import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Table, Tag, Space, Input, Button, Layout } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import campaignApi from '../../../../api/campaignApi';
const { Header, Content } = Layout;
const { Column, ColumnGroup } = Table;
const { Search } = Input;
ViewCampaign.propTypes = {};
const dataSource = [
   {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
   },
   {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
   },
];

function ViewCampaign(props) {
   const columns = [
      {
         title: 'Name',
         dataIndex: 'name',
         width: '30%',
      },
      {
         title: 'Position',
         dataIndex: 'positions',
      },
      {
         title: 'Address',
         dataIndex: 'address',
         width: '20%',
      },
      {
         title: 'Start Date',
         dataIndex: 'start_date',
      },
      {
         title: 'End Date',
         dataIndex: 'end_date',
      },
      {
         title: 'Technology',
         dataIndex: 'tags',
      },
      {
         title: '',
         render: () => <a>Detail</a>,
         width: '5%',
      },
      {
         title: '',
         render: () => <a>Edit</a>,
         width: '5%',
      },
   ];
   const [data, setData] = useState([]);
   useEffect(() => {
      const handleData = async () => {
         try {
            const db = await campaignApi.getCampainsForHr();
            setData(db);
         } catch (error) {
            console.log(error);
         }
      };
      handleData();
   }, []);
   console.log(data);
   console.log(dataSource);
   return (
      <Layout>
         <Header
            style={{
               backgroundColor: '#ffffff',
               display: 'flex',
               justifyContent: 'flex-end',
            }}
         >
            <div className='header-btn'>
               <Search
                  placeholder='input search text'
                  style={{ width: 400, margin: '15px' }}
               />
               <Button type='primary' shape='round' icon={<PlusCircleFilled />}>
                  Create Compaign
               </Button>
            </div>
         </Header>
         <Layout style={{ padding: '15px' }}>
            <Content>
               <Table columns={columns} dataSource={data} key={data.id} />
            </Content>
         </Layout>
      </Layout>
   );
}

export default ViewCampaign;
