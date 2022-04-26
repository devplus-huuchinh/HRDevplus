import React from 'react';
import { Row, Space, Typography, Button, Image } from 'antd';
import { SettingOutlined, CalendarOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Text, Title } = Typography;
const CompanyWrapper = styled.div`
   width: 100%;
   padding: 20px 10px;
   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
   background-color: #fff;
   border-radius: 10px;
   .campaign__detail--image {
      width: 100%;
      aspect-ratio: 4 / 3;
   }
`;

function Company(props) {
   const viewPageCompany = () => {
      const url = 'https://stunited.vn/';
      window.open(url, '_blank');
   };

   return (
      <CompanyWrapper>
         <Space
            direction='vertical'
            size='middle'
            style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            <Image
               src='https://stunited.vn/wp-content/uploads/2019/09/stunited-e15650013362301.png'
               preview={false}
               style={{ width: '100%' }}
               className='campaign__detail--image'
            />
            <Title level={4}>ST United</Title>
            <Row>
               <Space size={'middle'}>
                  <Text>
                     <SettingOutlined /> Products
                  </Text>
                  <Text>
                     <CalendarOutlined /> Monday - Friday
                  </Text>
               </Space>
            </Row>
            <Text>368 Tran Hung Dao - Da Nang</Text>
            <Button type='primary' onClick={() => viewPageCompany()}>
               View Our Company Page
            </Button>
         </Space>
      </CompanyWrapper>
   );
}

export default Company;
