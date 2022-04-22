import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { Typography } from 'antd';
import CampaignDetail from '../../components/CampaignDetail';

const CampaignDetailPageWrapper = styled.div`
   padding: 20px;
   background: #f1f3f6;
`;

function CampaignDetailPage(props) {
   const { campaignId } = useParams();
   return (
      <CampaignDetailPageWrapper campaignId={campaignId}>
         <Typography.Title>
            This is CampaignDetailPage {campaignId}
         </Typography.Title>
         <CampaignDetail />
      </CampaignDetailPageWrapper>
   );
}

export default CampaignDetailPage;
