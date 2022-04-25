import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Row, Col, Breadcrumb, Space, Spin } from 'antd';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Section } from '../../components/Section/Section.styles';
import { Container } from '../../components/Container/Container.styles';
import campaignApi from '../../../../api/campaignApi';
import Company from '../../components/Company';
import CampaignDetail from '../../components/CampaignDetail';

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

   const [campaignDetail, setCampaignDetail] = useState({});
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      const getCampaignById = async () => {
         try {
            const responseCampaignDetail = await campaignApi.getCampainDetail(
               campaignId
            );
            setCampaignDetail(responseCampaignDetail);
            setLoading(true);
         } catch (error) {
            console.log(
               '🚀 ~ file: index.jsx ~ line 36 ~ getCampaignById ~ error',
               error
            );
         }
      };
      getCampaignById();
   }, [campaignId]);

   return (
      <React.Fragment>
         {loading ? (
            <CampaignDetailPageWrapper campaignId={campaignId}>
               <Header />
               <Section style={{ paddingTop: '20px' }}>
                  <Container>
                     <Space
                        direction='vertical'
                        size='middle'
                        style={{ width: '100%' }}
                     >
                        <Breadcrumb>
                           <Breadcrumb.Item>
                              <Link to={'/home'}> Home</Link>
                           </Breadcrumb.Item>
                           <Breadcrumb.Item>
                              {campaignDetail.name}
                           </Breadcrumb.Item>
                        </Breadcrumb>
                        <Row gutter={[8, 8]} style={{ padding: '20px 0' }}>
                           <Col xs={24} sm={24} lg={18}>
                              <CampaignDetail
                                 campaignId={campaignDetail.id}
                                 campaignName={campaignDetail.name}
                                 campaignAdd={campaignDetail.address}
                                 campaignStartDate={campaignDetail.start_date}
                                 campaignEndDate={campaignDetail.end_date}
                                 campaignImage={
                                    campaignDetail.image_url === 'null' || ''
                                       ? 'https://stunited.vn/wp-content/uploads/2019/09/stunited-e15650013362301.png'
                                       : campaignDetail.image_url
                                 }
                                 campaignDescription={
                                    campaignDetail.description
                                 }
                              />
                           </Col>
                           <Col xs={0} sm={0} lg={6}>
                              <Company />
                           </Col>
                        </Row>
                     </Space>
                  </Container>
               </Section>
               <Footer />
            </CampaignDetailPageWrapper>
         ) : (
            <Spin
               tip='Loading...'
               size='large'
               style={{
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
      </React.Fragment>
   );
}

export default CampaignDetailPage;
