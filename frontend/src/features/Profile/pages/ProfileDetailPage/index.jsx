import { SettingOutlined } from '@ant-design/icons';
import { Button, Col, Image, Row, Select, Space, Spin, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import profileApi from '../../../../api/profileApi';
import ProfileDetail from '../../components/ProfileDetail';
import './profileDetailPage.scss';

// ProfileDetailPage.propTypes = {};
const { Option } = Select;
const { Title, Text } = Typography;

function ProfileDetailPage(props) {
   const { id } = useParams();
   const [data, setData] = useState({});
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const getProfileDetail = async () => {
         try {
            const profileDetailRes = await profileApi.profileDetail({ id: id });
            console.log(profileDetailRes);
            setLoading(false);
            setData(profileDetailRes);
         } catch (error) {
            console.log(error);
         }
      };
      getProfileDetail();
   }, [id]);

   return (
      <Spin spinning={loading}>
         <div className='profile-detail-container'>
            <Space
               direction='vertical'
               size={20}
               style={{
                  display: 'flex',
               }}
            >
               <Row
                  gutter={[30, 16]}
                  style={{
                     background: '#fff',
                     padding: '20px 10px',
                     borderRadius: '6px',
                  }}
               >
                  <Col xs={24} sm={24} md={6}>
                     <Image
                        preview={false}
                        className='profile-detail__left-image'
                        src={data.image_url}
                        style={{ borderRadius: '6px' }}
                     />
                  </Col>
                  <Col xs={24} sm={24} md={18}>
                     <Space
                        direction='vertical'
                        size={0}
                        style={{ display: 'flex' }}
                     >
                        <Title
                           level={3}
                           style={{
                              backgroundColor: '#4670a2',
                              padding: '10px 0 10px 20px',
                              borderRadius: '6px',
                              color: '#fff',
                           }}
                        >
                           {data.first_name
                              ? `${data.first_name} ${data.last_name}`
                              : 'Candidate Name'}
                        </Title>
                        <Row gutter={[20, 20]}>
                           <Col xs={24} sm={24} md={24} lg={16}>
                              <ProfileDetail data={data} />
                           </Col>
                           <Col xs={24} sm={24} md={24} lg={8}>
                              <Space
                                 direction='vertical'
                                 style={{ display: 'flex' }}
                              >
                                 <Title
                                    level={5}
                                    style={{
                                       padding: '10px 5px',
                                       display: 'flex',
                                       borderBottom: '1px solid #ccc',
                                    }}
                                 >
                                    <Space size='small'>
                                       <SettingOutlined />
                                       Action
                                    </Space>
                                 </Title>
                                 <div
                                    style={{
                                       display: 'flex',
                                       alignItems: 'center',
                                    }}
                                    className='action__dropdown'
                                 >
                                    <Text
                                       style={{
                                          width: '55px',
                                          display: 'inline-block',
                                          marginRight: '10px',
                                       }}
                                    >
                                       STEP:
                                    </Text>
                                    <Select>
                                       <Option>TEST</Option>
                                    </Select>
                                 </div>
                                 <div
                                    size='small'
                                    style={{ display: 'flex', width: '100%' }}
                                 >
                                    <Text
                                       style={{
                                          width: '55px',
                                          display: 'block',
                                          marginRight: ' 10px',
                                       }}
                                    >
                                       STATUS:
                                    </Text>
                                    <Text>STATUS</Text>
                                 </div>
                                 <Space
                                    size='small'
                                    style={{
                                       display: 'flex',
                                       justifyContent: 'flex-end',
                                       marginTop: '15px',
                                    }}
                                 >
                                    <Button type='primary'>Accept</Button>
                                    <Button type='primary' ghost>
                                       Reject
                                    </Button>
                                 </Space>
                              </Space>
                           </Col>
                        </Row>
                     </Space>
                  </Col>
               </Row>
               <div className='profile-detail__wrapper'>
                  {Object.keys(data).length > 0 && (
                     <iframe
                        src={data.cv_url}
                        frameBorder='0'
                        width='100%'
                        height='800px'
                        allowFullScreen={true}
                     ></iframe>
                  )}
               </div>
            </Space>
         </div>
      </Spin>
   );
}

export default ProfileDetailPage;
