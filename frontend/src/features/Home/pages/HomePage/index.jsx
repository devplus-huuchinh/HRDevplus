import { CaretRightOutlined } from '@ant-design/icons';
import { Col, Row, Space, Spin, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import campaignApi from '../../../../api/campaignApi';
import MainLayout from '../../../../containers/MainLayout';
import Campaign from '../../components/Campaign';
import CandidateSearchBar from '../../components/CandidateSearchBar';
import { CampaignListWrapper } from './Homepage.styles';
import Tag from '../../components/Tag';

const { Title } = Typography;

function HomePage(props) {
   let history = useHistory();

   const [campaigns, setCampaigns] = useState([]);

   const [loading, setLoading] = useState(false);

   useEffect(() => {
      const getCampaignsInDb = async () => {
         try {
            const campaignActive = await campaignApi.getCampains();
            setCampaigns(campaignActive);
            setLoading(true);
         } catch (error) {
            console.log(error);
         }
      };
      getCampaignsInDb();
   }, []);

   const handleSubmitCandidateSearch = (keyword) => {
      history.push({
         pathname: `/search/candidate`,
         state: {
            name: keyword,
            position_campaign: [],
            campaign_technique: [],
            is_active: [1],
            start_date: '1970-01-01',
            end_date: '2100-01-01',
         },
      });
   };

   return (
      <>
         {loading ? (
            <MainLayout>
               <Space
                  direction='vertical'
                  size={'large'}
                  style={{ width: '100%', display: 'flex' }}
               >
                  <Row>
                     <Col span={24}>
                        <CandidateSearchBar
                           handleSubmitCandidateSearch={
                              handleSubmitCandidateSearch
                           }
                        />
                     </Col>
                  </Row>
                  <Row
                     style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                     }}
                  >
                     <Col>
                        <Title
                           level={2}
                           style={{
                              color: '#f26b28',
                           }}
                           className='campaign-title'
                        >
                           <CaretRightOutlined />
                           Recruitment
                        </Title>
                     </Col>
                  </Row>
                  <CampaignListWrapper>
                     {campaigns.map((campaign) => {
                        return (
                           <Campaign
                              key={campaign.id}
                              campaignId={campaign.id}
                              campaignImg={campaign.image_url}
                              campaignName={campaign.name}
                              campaignTech={campaign.technique?.map((tech) => {
                                 return (
                                    <Tag
                                       key={tech.name}
                                       tagContent={tech.name}
                                    />
                                 );
                              })}
                              campaignAdd={campaign.address}
                           />
                        );
                     })}
                  </CampaignListWrapper>
               </Space>
            </MainLayout>
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
      </>
   );
}

export default HomePage;
