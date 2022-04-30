import { PlusCircleFilled } from '@ant-design/icons';
import { Button, Input, Layout, Spin, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import campaignApi from '../../../../api/campaignApi';
import './index.scss';

ViewCampaign.propTypes = {};

const { Header, Content } = Layout;
const { Search } = Input;

function ViewCampaign(props) {
   let history = useHistory();

   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);

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
      {
         title: 'Detail',
         dataIndex: 'id',
         render: (record) => (
            <Button
               type='primary'
               onClick={() => history.push(`/dashboard/profile/${record}`)}
            >
               Detail
            </Button>
         ),
      },
      // {
      //    title: '',
      //    render: () => <a>Edit</a>,
      //    width: '5%',
      // },
   ];

   useEffect(() => {
      const handleData = async () => {
         try {
            const db = await campaignApi.getCampainsForHr();
            setLoading(false);
            setData(db);
         } catch (error) {
            console.log(error);
         }
      };
      handleData();
   }, []);

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
               <Button
                  type='primary'
                  shape='round'
                  icon={<PlusCircleFilled />}
                  onClick={() => history.push('/dashboard/campaign/create')}
               >
                  Create Campaign
               </Button>
            </div>
         </Header>
         <Layout style={{ padding: '15px' }}>
            <Content>
               <Spin spinning={loading}>
                  <Table
                     columns={columns}
                     dataSource={data}
                     rowKey={(record) => record.id}
                  />
               </Spin>
            </Content>
         </Layout>
      </Layout>
   );
}

export default ViewCampaign;
