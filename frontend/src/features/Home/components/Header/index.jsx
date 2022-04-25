import React from 'react';
import { Typography, Input, Row, Col, Space, Image } from 'antd';
import styled from 'styled-components';
import { Container } from '../Container/Container.styles';

const { Title } = Typography;
const { Search } = Input;
const HeaderWrapper = styled.div`
   width: 100%;
   // background: rgb(70, 112, 162);
   background: #000c20;
   padding: 20px 0;
   .devplus {
      font-size: 28px;
      font-weight: bold;
      margin: 0 !important;
      letter-spacing: 1px;
      text-align: center;
      > span {
         color: #fff;
      }
   }
   .ant-select {
      width: 100% !important;
   }
`;
const HeaderSearch = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
`;
function Header(props) {
   const onSearch = (value) => console.log(value);

   return (
      <HeaderWrapper>
         <Container>
            <Space
               direction='vertical'
               size='middle'
               style={{ display: 'flex' }}
            >
               <Row justify='center'>
                  <Col sm={10} md={10} lg={6} className='devplus'>
                     <Image
                        preview={false}
                        src='https://devplus.asia/assets/images/devplus/Artboard_2.png'
                     />
                  </Col>
               </Row>
               <HeaderSearch>
                  <Space
                     direction='vertical'
                     size='small'
                     style={{ display: 'flex' }}
                  >
                     <Row justify='center'>
                        <Col sm={24} md={18} lg={12}>
                           <Title level={5} style={{ color: '#fff' }}>
                              United to grow up together
                           </Title>
                        </Col>
                     </Row>
                     <Row justify='center'>
                        <Col xs={24} sm={24} md={18} lg={12}>
                           <Search
                              placeholder='input search text'
                              onSearch={onSearch}
                              enterButton
                              size='large'
                           />
                        </Col>
                     </Row>
                     <Row justify='center'>
                        <Col xs={24} sm={24} md={18} lg={12}>
                           <Title level={5} style={{ color: '#fff' }}>
                              WE DEVELOP | WE SUPPORT | WE IMPROVE
                           </Title>
                        </Col>
                     </Row>
                  </Space>
               </HeaderSearch>
            </Space>
         </Container>
      </HeaderWrapper>
   );
}

export default Header;
