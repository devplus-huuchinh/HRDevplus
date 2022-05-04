import { CalendarOutlined, HomeOutlined } from '@ant-design/icons';
import {
   Button,
   Col,
   Image,
   Row,
   Space,
   Tag,
   Typography,
   Statistic,
} from 'antd';
import parse from 'html-react-parser';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import './CampaignDetail.scss';

const { Title, Text } = Typography;
const { Countdown } = Statistic;

const CampaignDetailWrapper = styled.div`
   width: 100%;
   padding: 20px;
   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
   background-color: #fff;
   border-radius: 10px;
   position: relative;
   .campaign__detail--header {
      width: 100%;
      padding: 0 10px;
      @media screen and (max-width: 768px) {
         display: flex;
         flex-direction: column;
         gap: 20px !important;
         align-items: center;
         justify-content: center;
         .campaign__detail--title {
            text-align: center;
         }
      }
   }
`;

function CampaignDetail(props) {
   const {
      campaignName,
      campaignAdd,
      campaignEndDate,
      campaignImage,
      campaignDescription,
      campaignTechnique,
      campaignPosition,
      onClick,
   } = props;

   const [isSticky, setSticky] = useState(false);
   const ref = useRef(null);

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', () => handleScroll);
      };
   }, []);

   const addDefaultSrc = (ev) => {
      ev.target.src =
         'https://stunited.vn/wp-content/uploads/2019/09/stunited-e15650013362301.png';
   };

   const handleScroll = () => {
      if (ref.current) {
         setSticky(ref.current.getBoundingClientRect().top <= 0);
      }
   };

   const daysRemaining = () => {
      const endDate = moment(campaignEndDate);
      const now = moment();

      return endDate.diff(now, 'days');
   };

   return (
      <CampaignDetailWrapper>
         <div
            className={`sticky-wrapper${isSticky ? ' sticky' : ''}`}
            ref={ref}
         >
            <Space
               size={'small'}
               style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '15px 0',
                  borderBottom: '1px solid #e8e8e8',
                  backgroundColor: '#fff',
               }}
               className='campaign__detail--header'
            >
               <Title level={3} className='campaign__detail--title'>
                  {campaignName}
               </Title>

               <Button
                  style={{
                     width: '200px',
                     border: 'none',
                     color: '#fff',
                     background: '#4c956c',
                  }}
                  onClick={onClick}
               >
                  Apply Now
               </Button>
            </Space>
         </div>
         <Row style={{ alignItems: 'center', paddingBottom: '20px' }}>
            <Col xs={24} sm={24} md={12}>
               <div style={{ padding: '20px 0' }}>
                  <Space
                     direction='vertical'
                     size={'middle'}
                     style={{ display: 'flex' }}
                  >
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
                                 End Date:
                                 {daysRemaining() <= 5 ? (
                                    <Countdown
                                       format='D day'
                                       value={moment(campaignEndDate)}
                                       valueStyle={{
                                          fontSize: '18px',
                                          color: 'red',
                                          fontWeight: 'bold',
                                       }}
                                    />
                                 ) : (
                                    <div
                                       style={{
                                          fontSize: '15px',
                                          fontWeight: 'bold',
                                       }}
                                    >
                                       {campaignEndDate}
                                    </div>
                                 )}
                              </Space>
                           </Text>
                        </Space>
                     </Text>
                     <Space
                        style={{
                           width: '100%',
                           paddingBottom: '15px',
                           borderBottom: '1px solid #ccc',
                        }}
                     >
                        <Text strong style={{ display: 'flex', width: '75px' }}>
                           Position:
                        </Text>
                        <Space size={'small'} wrap>
                           {campaignPosition?.map((position) => (
                              <Tag key={position.pivot.position_id}>
                                 {position.name}
                              </Tag>
                           ))}
                        </Space>
                     </Space>
                     <Space
                        style={{
                           width: '100%',
                           paddingBottom: '15px',
                           borderBottom: '1px solid #ccc',
                        }}
                     >
                        <Text strong style={{ display: 'flex', width: '75px' }}>
                           Technique:
                        </Text>
                        <Space size={'small'} wrap>
                           {campaignTechnique?.map((technique) => (
                              <Tag key={technique.pivot.technique_id}>
                                 {technique.name}
                              </Tag>
                           ))}
                        </Space>
                     </Space>
                  </Space>
               </div>
            </Col>
            <Col xs={24} sm={24} md={12}>
               <div
                  style={{ padding: '0 15px' }}
                  className='campaign__detail--image--wrapper'
               >
                  <Image
                     onError={(ev) => addDefaultSrc(ev)}
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
         <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Title level={4}>Description</Title>
            <div style={{ lineHeight: '2' }}>{parse(campaignDescription)}</div>
         </div>
      </CampaignDetailWrapper>
   );
}

export default CampaignDetail;
