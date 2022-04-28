import React from 'react';
import { Typography, Space, Image } from 'antd';
import styled from 'styled-components';
import { Container } from '../Container/Container.styles';
import { useHistory } from 'react-router-dom';

const { Title } = Typography;
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

function Header(props) {
   let history = useHistory();

   const onClickLogo = () => {
      history.push('/');
   };

   return (
      <HeaderWrapper>
         <Container onClick={onClickLogo} style={{ cursor: 'pointer' }}>
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
                  style={{ width: '100%', maxWidth: '300px' }}
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
