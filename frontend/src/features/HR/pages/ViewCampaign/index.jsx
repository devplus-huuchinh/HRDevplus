import { PlusCircleFilled } from '@ant-design/icons';
import { Button, Input, Layout, Table, Tag, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import campaignApi from '../../../../api/campaignApi';
import './index.scss';

ViewCampaign.propTypes = {};

const { Header, Content } = Layout;

function ViewCampaign(props) {
   let history = useHistory();

   const [loading, setLoading] = useState(false);

   const columns = [
      {
         title: 'Name',
         dataIndex: 'name',
         width: '30%',
      },
      {
         title: 'Address',
         dataIndex: 'address',
         width: '15%',
      },
      {
         title: 'Technology',
         dataIndex: 'technique',
         render: (tags) => (
            <>
               {tags.map((tag) => {
                  return (
                     <Tag color='#1890ff' key={tag.name}>
                        {tag.name}
                     </Tag>
                  );
               })}
            </>
         ),
      },
      {
         title: 'Quantily',
         dataIndex: 'quantity',
      },
      {
         title: 'Position',
         dataIndex: 'position',
         render: (tags) => (
            <>
               {tags.map((tag) => {
                  return (
                     <Tag color='#1890ff' key={tag.name}>
                        {tag.name.toUpperCase()}
                     </Tag>
                  );
               })}
            </>
         ),
         width: '20%',
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
         title: 'Status',
         dataIndex: 'is_active',
         render: (tag) => {
            return tag === 1 ? (
               <Tag color='#1890ff'>Public</Tag>
            ) : (
               <Tag color='#1890ff'>Close</Tag>
            );
         },
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

   const [data, setData] = useState([]);

   useEffect(() => {
      const handleData = async () => {
         try {
            const db = await campaignApi.getCampainsForHr();
            setData(db);
            setLoading(true);
         } catch (error) {
            console.log(error);
         }
      };
      handleData();
   }, []);

   return (
      <>
         <Layout>
            <Header>
               <Input placeholder='Basic usage' />
               <Input placeholder='Basic usage' />
               <div className='btn-group'>
                  <Button shape='round'>Clear</Button>
                  <Button
                     type='primary'
                     shape='round'
                     icon={<PlusCircleFilled />}
                  >
                     Create
                  </Button>
                  <Button type='primary'>Collapse</Button>
               </div>
            </Header>
            {loading ? (
               <Layout style={{ padding: '15px' }}>
                  <Content>
                     <Table
                        columns={columns}
                        dataSource={data}
                        rowKey={(record) => record.id}
                     />
                  </Content>
               </Layout>
            ) : (
               <Spin
                  tip='Loading...'
                  size='large'
                  style={{
                     position: 'absolute',
                     top: '0%',
                     left: '-5%',
                     width: '100vw',
                     height: '100vh',
                     maxHeight: 'unset',
                     display: 'flex',
                     gap: '20px',
                     flexDirection: 'column',
                     justifyContent: 'center',
                     alignItems: 'center',
                  }}
               />
            )}
         </Layout>
      </>
   );
}

export default ViewCampaign;
