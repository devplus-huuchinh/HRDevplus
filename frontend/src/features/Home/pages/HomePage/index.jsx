import { Layout, Typography } from 'antd';
import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Campaign from '../../components/Campaign';

const { Content } = Layout;

const styles = {
   content: {
      padding: '25px',
      flexShrink: '0',
      background: '#f1f3f6',
      position: 'relative',
   },
};
const CampaignListWrapper = styled.div`
   --f-columns: 4;
   --f-gap: 20px;
   display: flex;
   flex-wrap: wrap;
   margin-left: calc(-1 * var(--f-gap));
   margin-bottom: calc(-1 * var(--f-gap));

   > * {
      margin-left: var(--f-gap);
      margin-bottom: var(--f-gap);
      width: calc((100% / var(--f-columns) - var(--f-gap)));
   }
   @media screen and (max-width: 802px) {
      --f-columns: 3;
   }
   @media screen and (max-width: 560px) {
      --f-columns: 2;
   }
`;

function HomePage(props) {
   const campaignId = '123';
   return (
      <Content style={styles.content}>
         <Typography.Title level={2}>List All Campaign</Typography.Title>
         <CampaignListWrapper>
            <Campaign campaignId={campaignId} />
            <Campaign campaignId={campaignId} />
            <Campaign campaignId={campaignId} />
            <Campaign campaignId={campaignId} />
            <Campaign campaignId={campaignId} />
         </CampaignListWrapper>
      </Content>
   );
}

export default HomePage;
