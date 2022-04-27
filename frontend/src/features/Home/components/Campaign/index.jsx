import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Image, Typography } from 'antd';
const { Title, Paragraph } = Typography;

export const CampaignWrapper = styled.div`
   width: 100%;
   height: 100%;
   cursor: pointer;
   margin: 0 auto;
   background: #ffffff;
   padding: 15px;
   text-align: center;
   border-radius: 8px;
   transition: all 0.3s ease;
   .campaign-image {
      width: 100%;
      aspect-ratio: 4/3;
   }
   &:hover {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transform: translateY(-5px);
   }
   @media screen and (max-width: 680px) {
      max-width: 400px;
   }
`;

Campaign.prototype = {
   campaignId: PropTypes.string.isRequired,
};

function Campaign(props) {
   const { campaignId, campaignImg, campaignName, campaignAdd } = props;
   const addDefaultSrc = (ev) => {
      ev.target.src =
         'https://stunited.vn/wp-content/uploads/2019/09/stunited-e15650013362301.png';
   };
   return (
      <Link to={`/campaign/${campaignId}`}>
         <CampaignWrapper>
            <Image
               onError={(ev) => addDefaultSrc(ev)}
               src={campaignImg}
               preview={false}
               width='100%'
               className='campaign-image'
               style={{ marginBottom: '10px', borderRadius: '8px' }}
            />
            <Title level={4}>{campaignName}</Title>
            <Paragraph>Address : {campaignAdd} </Paragraph>
            <Paragraph>ST United - Da Nang</Paragraph>
         </CampaignWrapper>
      </Link>
   );
}

export default Campaign;
