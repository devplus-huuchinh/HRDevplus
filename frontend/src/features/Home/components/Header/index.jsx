import React from 'react';
import { Typography, Space, Image } from 'antd';
import styled from 'styled-components';
import { Container } from '../Container/Container.styles';
import { useHistory } from 'react-router-dom';

const { Title } = Typography;

const HeaderWrapper = styled.div`
   width: 100%;
   height: 400px;
   background: #000c20;
   background-image: url(https://stunited.vn/wp-content/uploads/2019/09/join.jpg);
   background-repeat: no-repeat;
   background-position: center center;
   background-size: cover;
   position: relative;
   &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
   }
   .header-container {
      position: absolute;
      top: 50px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 99;
   }
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

function Header(props) {
   let history = useHistory();

   const onClickLogo = () => {
      history.push('/');
   };

   return (
      <HeaderWrapper>
         <Container className='header-container'>
            <Space
               direction='vertical'
               size='middle'
               style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
               }}
            >
               <Image
                  preview={false}
                  src='https://devplus.asia/assets/images/devplus/Artboard_2.png'
                  style={{
                     width: '100%',
                     maxWidth: '350px',
                     cursor: 'pointer',
                  }}
                  onClick={onClickLogo}
               />

               <Title level={5} style={{ color: '#fff', textAlign: 'center' }}>
                  WE DEVELOP | WE SUPPORT | WE IMPROVE
               </Title>
            </Space>
         </Container>
      </HeaderWrapper>
   );
}

export default Header;
