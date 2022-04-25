import React, { useEffect, useState } from 'react';
import { Spin, Typography, Select, Row, Col, Space } from 'antd';
import authApi from '../../../../api/authApi';
import campaignApi from '../../../../api/campaignApi';
import Campaign from '../../components/Campaign';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { CampaignListWrapper, HomepageContainer } from './Homepage.styles';
import { Container } from '../../components/Container/Container.styles';
import { CaretRightOutlined, FilterOutlined } from '@ant-design/icons';
import Slider from '../../components/Slider';
import { Section } from '../../components/Section/Section.styles';

const { Title, Text } = Typography;
const { Option } = Select;

function HomePage(props) {
   const [campaigns, setCampaigns] = useState([]);
   console.log(
      '🚀 ~ file: index.jsx ~ line 16 ~ HomePage ~ campaigns',
      campaigns
   );
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      const getCampaignsInDb = async () => {
         try {
            await authApi.csrfCookie();
            const campaignActive = await campaignApi.getCampains();
            setCampaigns(campaignActive);
            setLoading(true);
         } catch (error) {
            console.log(error);
         }
      };
      getCampaignsInDb();
   }, []);

   return (
      <React.Fragment>
         {loading ? (
            <HomepageContainer style={{}}>
               <Header />
               {/* <Section style={{ padding: '20px 0' }}>
                  <Container>
                     <Slider />
                  </Container>
               </Section> */}
               <Section style={{ paddingTop: '40px', paddingBottom: '170px' }}>
                  <Container>
                     <Space
                        direction='vertical'
                        size={'large'}
                        style={{ width: '100%', display: 'flex' }}
                     >
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
                                    <Option value='dateCreate'>
                                       Date Created
                                    </Option>
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
                                    campaignImg={
                                       campaign.image_url === 'null' || ''
                                          ? 'https://stunited.vn/wp-content/uploads/2019/09/stunited-e15650013362301.png'
                                          : campaign.image_url
                                    }
                                    campaignName={campaign.name}
                                    campaignAdd={campaign.address}
                                 />
                              );
                           })}
                        </CampaignListWrapper>
                     </Space>
                  </Container>
               </Section>
               <Footer />
            </HomepageContainer>
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

export default HomePage;
