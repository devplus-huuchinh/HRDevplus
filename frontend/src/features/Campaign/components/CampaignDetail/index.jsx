import { CalendarOutlined, HomeOutlined } from '@ant-design/icons';
import { Button, Col, Image, Row, Space, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

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
   } = props;

   const openApplyForm = () => {};
   // const [isOpen, setIsOpen] = useState(false);
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
               onClick={() => openApplyForm()}
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
                           <Button>ReactJs</Button>
                           <Button>VueJS</Button>
                           <Button>Laravel</Button>
                           <Button>NodeJs</Button>
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
         <Space direction='vertical' size={'middle'}>
            <div>
               <Title level={4}>Top 3 Reasons To Join Us</Title>
               <ul style={{ listStyle: 'circle', paddingLeft: '30px' }}>
                  <li>Chuyên gia đầu ngành </li>
                  <li>Cơ hội phát triển nhanh </li>
                  <li>Môi trường năng động sáng tạo </li>
               </ul>
            </div>
            <div>
               <Title level={4}>Description</Title>
               <Text style={{ textAlign: 'justify' }}>
                  {campaignDescription}
               </Text>
            </div>
            <div>
               <Title level={4}>Why You'll Love Working Here</Title>
               <Text style={{ textAlign: 'justify' }}>
                  <Title level={5}># Dẫn đầu thị trường</Title>
                  <ul style={{ listStyle: 'circle', paddingLeft: '30px' }}>
                     <li>
                        Cơ hội được làm việc tại Tập đoàn tiên phong mở đường ,
                        kiến tạo tương lai thông minh, gắn kết của Việt Nam.
                     </li>
                     <li>
                        Cơ hội được thử sức trong những lĩnh vực công nghệ tiên
                        tiến, hiện đại nhất.
                     </li>
                  </ul>
                  <Title level={5}># Môi trường năng động sáng tạo</Title>
                  <ul style={{ listStyle: 'circle', paddingLeft: '30px' }}>
                     <li>
                        Môi trường làm việc cởi mở và năng động, khuyến khích
                        trao đổi ý tưởng ở mọi cấp, cho phép bạn làm việc, sáng
                        tạo theo cách riêng.
                     </li>
                     <li>
                        Được khơi gợi cảm hứng làm việc với văn phòng xanh,
                        không gian mở, hiện đại tiêu chuẩn quốc tế.
                     </li>
                  </ul>
                  <Title level={5}># Cơ hội thử thách và phát triển</Title>
                  <ul style={{ listStyle: 'circle', paddingLeft: '30px' }}>
                     <li>
                        Áp dụng kiến thức, kĩ năng, kinh nghiệm chuyên môn giải
                        quyết các bài toán hấp dẫn, thử thách tại Viettel.
                     </li>
                     <li>
                        Cơ hội thử sức ở nhiều lĩnh vực, sản phẩm và quốc gia
                        khác nhau góp phần thay đổi xã hội .
                     </li>
                     <li>
                        Viettel cam kết cho bạn nền tảng vững chắc để học hỏi và
                        phát triển.
                     </li>
                  </ul>
                  <Title level={5}># Chế ngộ đãi ngộ hấp dẫn, cạnh tranh</Title>
                  <ul style={{ listStyle: 'circle', paddingLeft: '30px' }}>
                     <li>
                        Lương thưởng cạnh tranh trên thị trường, phản ánh đúng
                        năng lực thực tế.
                     </li>
                  </ul>
               </Text>
            </div>
         </Space>
      </CampaignDetailWrapper>
   );
}

export default CampaignDetail;
