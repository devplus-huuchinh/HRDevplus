import React from 'react';
import PropTypes from 'prop-types';
import { Table, Tag, Space,Input, Button,Layout } from 'antd';
import ViewCampaignWrapper from './ViewCampaign.styles';
import { PlusCircleFilled } from '@ant-design/icons';
const { Header, Content } = Layout;
const { Column,ColumnGroup} = Table;
const { Search } = Input;
ViewCampaign.propTypes = {};
const columns = [
   {
     title: 'Name',
     dataIndex: 'name',
     filters: [
       {
         text: 'Joe',
         value: 'Joe',
       },
     ],
     filterMode: 'tree',
     filterSearch: true,
     onFilter: (value, record) => record.name.includes(value),
     width: '30%',
   },
   {
     title: 'Position',
     dataIndex: 'age',
     filters: [
      {
        text: 'Fresher',
        value: 'Fresher',
      },
      {
        text: 'Intern',
        value: 'Intern',
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
   },
   {
     title: 'Action',
     dataIndex: 'active',
     filters: [
       {
         text: 'Active',
         value: true,
       },
       {
         text: 'Disable',
         value: false,
       },
     ],
     onFilter: (value, record) => record.address.startsWith(value),
     filterSearch: true,
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
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => {
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
      title:'',
      render: () => <a>Detail</a>,
      width: '5%',
   },
   {
      title:'',
      render: () => <a>Edit</a>,
      width: '5%',
   }
 ];
 
 const data = [
   {
     key: '1',
     name: 'John Brown',
     age: 'Fresher',
     address: 'New York No. 1 Lake Park',
     tags: ['nice', 'developer'],
   },
   {
     key: '2',
     name: 'Jim Green',
     age: 'Intern',
     address: 'London No. 1 Lake Park',
     tags: ['loser'],
   },
   {
     key: '3',
     name: 'Joe Black',
     age: 32,
     address: 'Sidney No. 1 Lake Park',
     tags: ['cool', 'teacher'],
   },
 ];
 
 function onChange(pagination, filters, sorter, extra) {
   console.log('params', pagination, filters, sorter, extra);
 }
 
function ViewCampaign(props) {
   return (
         <Layout>
            <Header style={{backgroundColor: '#ffffff', display: 'flex', justifyContent:"flex-end"}}>
               <div className="header-btn">
                  <Search  placeholder="input search text" style={{ width: 400,margin:'15px' }} />
                  <Button type="primary" shape="round" icon={<PlusCircleFilled/>}  >Create Compaign</Button>
               </div>
            </Header>
            <Layout style={{padding:'15px'}}>
               <Content>
                  <Table columns={columns} dataSource={data} onChange={onChange} />
               </Content>
            </Layout> 
         </Layout>
      );
}

export default ViewCampaign;