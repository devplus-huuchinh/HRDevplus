import { CaretRightOutlined, FilterOutlined } from '@ant-design/icons';
import { Col, Row, Select, Space, Spin, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import campaignApi from '../../../../api/campaignApi';
import MainLayout from '../../../../containers/MainLayout';
import Campaign from '../../components/Campaign';
import CandidateSearchBar from '../../components/CandidateSearchBar';
import { CampaignListWrapper } from './Homepage.styles';

const { Title, Text } = Typography;
const { Option } = Select;

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
         search: `?keyword=${keyword}`,
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
                  <CandidateSearchBar
                     handleSubmitCandidateSearch={handleSubmitCandidateSearch}
                  />
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
                           Our Campaigns
                        </Title>
                     </Col>
                     <Col>
                        <Space>
                           <Text strong>
                              <Space
                                 size='small'
                                 style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                 }}
                              >
                                 <FilterOutlined />
                                 Sort by:
                              </Space>
                           </Text>
                           <Select
                              defaultValue='dateCreate'
                              style={{ width: 150 }}
                           >
                              <Option value='dateCreate'>Date Created</Option>
                              <Option value='name'>Name</Option>
                           </Select>
                        </Space>
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
