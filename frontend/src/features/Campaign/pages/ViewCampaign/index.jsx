import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Table, Tag, Space, Input, Button, Layout } from 'antd';
import ViewCampaignWrapper from './ViewCampaign.styles';
import { PlusCircleFilled } from '@ant-design/icons';
import campaignApi from '../../../../api/campaignApi';
const { Header, Content } = Layout;
const { Column, ColumnGroup } = Table;
const { Search } = Input;
ViewCampaign.propTypes = {};

function ViewCampaign(props) {
   const columns = [
      {
         title: 'Name',
         dataIndex: 'name',
         width: '30%',
      },
      {
         title: 'Position',
         dataIndex: 'age',
      },
      {
         title: 'Action',
         dataIndex: 'active',
         width: '20%',
      },
      {
         title: 'Start Date',
         dataIndex: 'address',
      },
      {
         title: 'End Date',
         dataIndex: 'address',
      },
      {
         title: 'Tags',
         key: 'tags',
         render: (tags) => (
            <span>
               {tags.map((tag) => {
                  let color = tag.length > 5 ? 'geekblue' : 'green';
                  if (tag === 'loser') {
                     color = 'volcano';
                  }
                  return (
                     <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                     </Tag>
                  );
               })}
            </span>
         ),
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
   const [datas, setData] = useState([]);
   useEffect(() => {
      const handleData = async () => {
         const db = await campaignApi.viewCampaign();
         setData(db);
         console.log(datas);
      };
      handleData();
   }, []);
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
               <Table
                  columns={columns}
                  // dataSource={datas}
               />
            </Content>
         </Layout>
      </Layout>
   );
}

export default ViewCampaign;
