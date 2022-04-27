import React from 'react';
import { Typography, Button, Space, Row, Col, Image } from 'antd';
import styled from 'styled-components';
import { HomeOutlined, CalendarOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const CampaignDetailWrapper = styled.div`
   width: 100%;
   padding: 20px;
   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
   background-color: #fff;
   border-radius: 10px;
   .campaign__detail--header {
      wwidth: 100%;
      .ant-space-item {
         width: 100%;
         display: flex;
         justify-content: center;
      }
   }
   .campaign__detail--image--wrapper {
      .ant-image {
         width: 100%;
      }
   }
`;

function CampaignDetail(props) {
   const {
      campaignName,
      campaignAdd,
      campaignStartDate,
      campaignEndDate,
      campaignImage,
      campaignDescription,
      campaignTechnique,
      onClick,
   } = props;

   return (
      <CampaignDetailWrapper>
         <Space
            direction='vertical'
            size={'middle'}
            style={{
               width: '100%',
               alignItems: 'center',
               justifyContent: 'center',
               paddingBottom: '20px',
               borderBottom: '1px solid #e8e8e8',
            }}
            className='campaign__detail--header'
         >
            <Title level={3}>{campaignName}</Title>
            <Button
               type='primary'
               danger
               style={{
                  width: '100%',
                  maxWidth: '700px',
               }}
               onClick={onClick}
            >
               Apply Now
            </Button>
         </Space>
         <Row style={{ alignItems: 'center' }}>
            <Col sm={24} md={12}>
               <div style={{ padding: '20px 0' }}>
                  <Space direction='vertical' size={'middle'}>
                     <Title level={4}>ST SOFTWARE</Title>
                     <Text>
                        <Space sise={'small'}>
                           <HomeOutlined />
                           {campaignAdd}
                        </Space>
                     </Text>
                     <Text>
                        <Space size={'small'}>
                           <CalendarOutlined />
                           <Text>
                              <Space size={'small'}>
                                 Start Date:
                                 {campaignStartDate}
                              </Space>
                           </Text>
                        </Space>
                     </Text>
                     <Text>
                        <Space size={'small'}>
                           <CalendarOutlined />
                           <Text>
                              <Space size={'small'}>
                                 End Date:
                                 {campaignEndDate}
                              </Space>
                           </Text>
                        </Space>
                     </Text>
                     <div>
                        <Space size={'small'} wrap>
                           {campaignTechnique}
                        </Space>
                     </div>
                  </Space>
               </div>
            </Col>
            <Col sm={24} md={12}>
               <div
                  style={{ padding: '20px 0' }}
                  className='campaign__detail--image--wrapper'
               >
                  <Image
                     src={campaignImage}
                     alt='Campain Image'
                     preview={false}
                     style={{
                        width: '100%',
                        aspectRatio: '16/9',
                        borderRadius: '10px',
                        objectFit: 'cover',
                     }}
                  />
               </div>
            </Col>
         </Row>
         <Text>{campaignDescription} </Text>
      </CampaignDetailWrapper>
   );
}

export default CampaignDetail;
