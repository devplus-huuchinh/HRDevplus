import { Col, Row, Space, Spin } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components';
import campaignApi from '../../../../api/campaignApi';
import BreadCrumbs from '../../../Home/components/BreadCrumb';
import { Container } from '../../../Home/components/Container/Container.styles';
import Footer from '../../../Home/components/Footer';
import Header from '../../../Home/components/Header';
import { Section } from '../../../Home/components/Section/Section.styles';
import CampaignDetail from '../../components/CampaignDetail';
import Company from '../../components/Company';

const CampaignDetailPageWrapper = styled.div`
   width: 100%;
   height: 100%;
   position: relative;
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
            console.log('🚀 ~ ', error);
         }
      };
      getCampaignById();
   }, [campaignId]);

   const history = useHistory();

   const openApplyForm = () => {
      history.push({
         pathname: `${campaignId}/apply`,
         state: {
            campaignDetail,
         },
      });
   };

   const [isSticky, setSticky] = useState(false);

   const ref = useRef(null);

   const handleScroll = () => {
      if (ref.current) {
         setSticky(ref.current.getBoundingClientRect().top <= 0);
      }
   };
   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', () => handleScroll);
      };
   }, []);

   return (
      <React.Fragment>
         {loading ? (
            <CampaignDetailPageWrapper campaignId={campaignId}>
               <Header />
               <Section style={{ paddingTop: '20px' }}>
                  <Container>
                     <Space
                        direction='vertical'
                        size={0}
                        style={{ width: '100%' }}
                     >
                        <BreadCrumbs campaignName={campaignDetail.name} />

                        <Row
                           gutter={[8, 8]}
                           style={{ padding: '20px 0', position: 'relative' }}
                        >
                           <Col xs={24} sm={24} lg={18}>
                              <CampaignDetail
                                 onClick={openApplyForm}
                                 campaignId={campaignDetail.id}
                                 campaignName={campaignDetail.name}
                                 campaignAdd={campaignDetail.address}
                                 campaignStartDate={campaignDetail.start_date}
                                 campaignEndDate={campaignDetail.end_date}
                                 campaignImage={campaignDetail.image_url}
                                 campaignTechnique={campaignDetail.technique}
                                 campaignPosition={campaignDetail.position}
                                 campaignDescription={
                                    campaignDetail.description
                                 }
                              />
                           </Col>
                           <Col xs={0} sm={0} lg={6}>
                              <div
                                 className={`sticky-wrapper${
                                    isSticky ? ' sticky' : ''
                                 }`}
                                 ref={ref}
                              >
                                 <Company />
                              </div>
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
