import { ContactsOutlined, UserOutlined } from '@ant-design/icons';
import { Col, Row, Space, Tag, Typography } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import './profileDetail.scss';

ProfileDetail.propTypes = {
   data: PropTypes.object,
};
const { Text, Title } = Typography;
function ProfileDetail(props) {
   const { data } = props;

   return (
      <Row gutter={[20, 20]}>
         <Col xs={24} sm={24} md={12} lg={12}>
            <Title level={5}>
               <Space
                  size={'small'}
                  style={{
                     padding: '10px 5px',
                     display: 'flex',
                     borderBottom: '1px solid #ccc',
                  }}
               >
                  <ContactsOutlined />
                  Contact
               </Space>
            </Title>
            <Space
               direction='vertical'
               size='middle'
               style={{ display: 'flex' }}
               wrap
            >
               <Space
                  direction='vertical'
                  size={'small'}
                  style={{ display: 'flex' }}
                  wrap
               >
                  <p
                     className='profileDetail__label'
                     style={{ fontWeight: ' bold' }}
                  >
                     Email:
                  </p>
                  <p className='profileDetail__info'>{data.email}</p>
               </Space>
               <Space
                  direction='vertical'
                  size={'small'}
                  style={{ display: 'flex' }}
               >
                  <p
                     className='profileDetail__label'
                     style={{ fontWeight: ' bold' }}
                  >
                     Phone Number:
                  </p>
                  <p className='profileDetail__info'>{data.phone_numb}</p>
               </Space>
            </Space>
         </Col>
         <Col xs={24} sm={24} md={12} lg={12}>
            <Title level={5} style={{}}>
               <Space
                  size={'small'}
                  style={{
                     padding: '10px 5px',
                     display: 'flex',
                     borderBottom: '1px solid #ccc',
                  }}
               >
                  <UserOutlined />
                  Advanced skill
               </Space>
            </Title>
            <Space
               direction='vertical'
               size='middle'
               style={{ display: 'flex' }}
            >
               <Space
                  direction='vertical'
                  size={'small'}
                  style={{ display: 'flex' }}
               >
                  <Text style={{ fontWeight: ' bold' }}>Technique</Text>
                  <p className='profileDetail__info'>
                     {data.technique?.map((i) => (
                        <Tag key={i.id}>{i.name}</Tag>
                     ))}
                  </p>
               </Space>
               <Space
                  direction='vertical'
                  size={'small'}
                  style={{ display: 'flex' }}
               >
                  <Text style={{ fontWeight: ' bold' }}>Position</Text>
                  <p className='profileDetail__info'>
                     <Tag>{data.position?.name}</Tag>
                  </p>
               </Space>
            </Space>
         </Col>
      </Row>
   );
}

export default ProfileDetail;
