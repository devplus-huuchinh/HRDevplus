import { PlusCircleFilled } from '@ant-design/icons';
import { Button, Input, Layout, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import campaignApi from '../../../../api/campaignApi';
import './index.scss';

ViewCampaign.propTypes = {};

const { Header, Content } = Layout;
const { Search } = Input;

function ViewCampaign(props) {
   const columns = [
      {
         title: 'Name',
         dataIndex: 'name',
         width: '25%',
      },
      {
         title: 'Position',
         dataIndex: 'position',
         render: (tags) => (
            <>
               {tags.map((tag) => {
                  let color = tag.length > 5 ? 'geekblue' : 'green';
                  if (tag.name === 'Intern') {
                     color = 'volcano';
                  }
                  return (
                     <Tag color={color} key={tag.name}>
                        {tag.name.toUpperCase()}
                     </Tag>
                  );
               })}
            </>
         ),
         width: '20%',
      },
      {
         title: 'Address',
         dataIndex: 'address',
         width: '15%',
      },
      {
         title: 'Start Date',
         dataIndex: 'start_date',
         width: '20%',
      },
      {
         title: 'End Date',
         dataIndex: 'end_date',
         width: '20%',
      },
      {
         title: 'Technology',
         dataIndex: 'technique',
         render: (tags) => (
            <>
               {tags.map((tag) => {
                  let color = tag.length > 5 ? 'geekblue' : 'green';
                  if (tag.name === 'PHP') {
                     color = 'volcano';
                  }
                  return (
                     <Tag color={color} key={tag.name}>
                        {tag.name}
                     </Tag>
                  );
               })}
            </>
         ),
      },
      // {
      //    title: '',
      //    render: () => <a>Detail</a>,
      //    width: '5%',
      // },
      // {
      //    title: '',
      //    render: () => <a>Edit</a>,
      //    width: '5%',
      // },
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
   return (
      <Layout>
         <Header>
            <Search
               placeholder='input search text'
               allowClear
               enterButton='Search'
               size='middle'
            />
            <div className='search-create-header'>
               <Button type='primary' shape='round' icon={<PlusCircleFilled />}>
                  Create Compaign
               </Button>
            </div>
         </Header>
         <Layout style={{ padding: '15px' }}>
            <Content>
               <Table
                  columns={columns}
                  dataSource={data}
                  rowKey={(record) => record.id}
               />
            </Content>
         </Layout>
      </Layout>
   );
}

export default ViewCampaign;
