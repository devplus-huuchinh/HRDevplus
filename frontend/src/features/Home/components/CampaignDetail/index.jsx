import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';
const CampaignDetailWrapper = styled.div`
   width: 100%;
   height: 100%;
   background-color: #fff;
`;

function CampaignDetail(props) {
   return (
      <CampaignDetailWrapper>
         <Typography.Title>Campaign Information </Typography.Title>
      </CampaignDetailWrapper>
   );
}

export default CampaignDetail;
