import React from 'react';
import { Typography, Row, Col, Space, Button } from 'antd';
import styled from 'styled-components';
import { Container } from '../Container/Container.styles';
import {
   PhoneOutlined,
   AimOutlined,
   MailOutlined,
   AliwangwangOutlined,
} from '@ant-design/icons';

const { Text, Title } = Typography;

const FooterWrapper = styled.div`
   width: 100%;
   padding-top: 60px;
   background: #000c20;
   .devplus {
      font-size: 20px;
      font-weight: bold;
      color: #fff;
   }
`;

const FooterCoppyRight = styled.div`
   width: 100%;
   background: #eee;
   padding: 20px 0;
   text-align: center;
`;

function Footer(props) {
   return (
      <FooterWrapper>
         <Container>
            <Row style={{ padding: '20px 0' }} gutter={[16, 16]}>
               <Col xs={24} sm={8} lg={4}>
                  <Title level={4} style={{ color: '#fff' }}>
                     <Space size={'small'}>
                        <AliwangwangOutlined />
                        Our Campus
                     </Space>
                  </Title>
                  <Space direction='vertical'>
                     <Button
                        ghost
                        href='https://stunited.vn/'
                        style={{ display: 'block', width: '120px' }}
                     >
                        ST United
                     </Button>
                     <Button
                        ghost
                        href='https://devplus.asia/'
                        style={{ display: 'block', width: '120px' }}
                     >
                        DevPlus
                     </Button>
                  </Space>
               </Col>
               <Col xs={24} sm={8} lg={4}>
                  <Title level={4} style={{ color: '#fff' }}>
                     <Space size={'small'}>
                        <AliwangwangOutlined />
                        Socials
                     </Space>
                  </Title>
                  <Space direction='vertical'>
                     <Button
                        ghost
                        href='https://www.tiktok.com/@stunited.daily'
                        style={{ display: 'block', width: '120px' }}
                     >
                        Tiktok
                     </Button>
                     <Button
                        ghost
                        href='https://www.facebook.com/stunited.vn'
                        style={{ display: 'block', width: '120px' }}
                     >
                        Facebook
                     </Button>
                  </Space>
               </Col>
               <Col>
                  <Title level={4} style={{ color: '#fff' }}>
                     <Space size={'small'}>
                        <AliwangwangOutlined />
                        Address
                     </Space>
                  </Title>
                  <Space
                     direction='vertical'
                     size='small'
                     style={{ display: 'flex' }}
                  >
                     <Text style={{ color: '#fff' }}>
                        <Space>
                           <AimOutlined />
                           368 Đường Trần Hưng Đạo, An Hải, An Hải Tây, Sơn Trà,
                           Đà Nẵng
                        </Space>
                     </Text>
                     <Text style={{ color: '#fff' }}>
                        <Space>
                           <PhoneOutlined />
                           (+84) 368492885
                        </Space>
                     </Text>
                     <Text style={{ color: '#fff' }}>
                        <Space>
                           <MailOutlined />
                           hello@stunited.vn
                        </Space>
                     </Text>
                  </Space>
               </Col>
            </Row>
         </Container>
         <FooterCoppyRight>
            <Container>
               <Text>DevPlus @ 2022, Created by Internship PHP Team</Text>
            </Container>
         </FooterCoppyRight>
      </FooterWrapper>
   );
}

export default Footer;
