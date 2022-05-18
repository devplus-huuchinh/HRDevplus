import React from 'react';
import PropTypes from 'prop-types';
import Campaign from '../../../Home/components/Campaign';
import { Typography } from 'antd';
import styled from 'styled-components';
import Tag from '../../../Home/components/Tag';

const CampaignSearchList = styled.div`
   --f-columns: 3;
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
   @media screen and (max-width: 767px) {
      --f-columns: 2;
   }
   @media screen and (max-width: 557px) {
      --f-columns: 1;
   }
`;

CandidateSearchResult.propTypes = {
   isSpin: PropTypes.bool,
   campaignSearchResult: PropTypes.array,
};

CandidateSearchResult.defaultProps = {
   isSpin: false,
   campaignSearchResult: [],
};

const { Title } = Typography;

function CandidateSearchResult(props) {
   const { isSpin, campaignSearchResult } = props;
   return (
      <>
         <CampaignSearchList>
            {campaignSearchResult?.length === 0 && isSpin === false ? (
               <NoSearchResult />
            ) : (
               campaignSearchResult.map((result) => (
                  <div key={result.id}>
                     <Campaign
                        campaignId={result.id}
                        campaignImg={result.image_url}
                        campaignName={result.name}
                        campaignAdd={result.address}
                        campaignTech={result.technique?.map((tech) => {
                           return (
                              <Tag key={tech.name} tagContent={tech.name} />
                           );
                        })}
                     />
                  </div>
               ))
            )}
         </CampaignSearchList>
      </>
   );
}

const NoSearchResult = () => {
   return (
      <>
         <Title level={2}>No Result</Title>
      </>
   );
};

export default CandidateSearchResult;
