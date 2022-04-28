import React from 'react';
import PropTypes from 'prop-types';
import Campaign from '../../../Home/components/Campaign';
import { CampaignListWrapper } from '../../../Home/pages/HomePage/Homepage.styles';
import { Typography } from 'antd';

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
         <CampaignListWrapper>
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
                     />
                  </div>
               ))
            )}
         </CampaignListWrapper>
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
