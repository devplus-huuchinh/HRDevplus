import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { Row, Col, Typography, Image, Button, Space } from 'antd';
// import CampaignDetail from '../../components/CampaignDetail';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Section } from '../../components/Section/Section.styles';
import { Container } from '../../components/Container/Container.styles';
import { SettingOutlined, CalendarOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;
const CampaignDetailPageWrapper = styled.div`
   width: 100%;
   height: 100%;
   .campaign__detail--image {
      width: 100%;
      aspect-ratio: 4/3;
      object-fit: cover;
   }
`;

function CampaignDetailPage(props) {
   const { campaignId } = useParams();
   console.log(
      '🚀 ~ file: index.jsx ~ line 24 ~ CampaignDetailPage ~ campaignId',
      campaignId
   );

   const viewPageCompany = () => {
      const url = 'https://stunited.vn/';
      window.open(url, '_blank');
   };
   return (
      <CampaignDetailPageWrapper campaignId={campaignId}>
         <Header />
         <Section>
            <Container>
               <Row gutter={[8, 0]} style={{ padding: '20px' }}>
                  <Col sm={24} lg={18}></Col>
                  <Col
                     sm={0}
                     lg={6}
                     style={{
                        padding: '20px 10px',
                        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                        borderRadius: '8px',
                     }}
                  >
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
                           src='https://source.unsplash.com/random'
                           preview={false}
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
                        <Button
                           type='primary'
                           onClick={() => viewPageCompany()}
                        >
                           View Our Company Page
                        </Button>
                     </Space>
                  </Col>
               </Row>
            </Container>
         </Section>
         <Footer />
      </CampaignDetailPageWrapper>
   );
}

export default CampaignDetailPage;
