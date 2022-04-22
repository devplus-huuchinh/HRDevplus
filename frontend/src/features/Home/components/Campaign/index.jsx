import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CampaignWrapper = styled.div`
   cursor: pointer;
`;

Campaign.prototype = {
   campaignId: PropTypes.string.isRequired,
};

function Campaign(props) {
   const { campaignId } = props;
   return (
      <CampaignWrapper>
         <Link to={`/${campaignId}`}>
            <img
               src='https://stunited.vn/wp-content/uploads/2019/09/stunited-e15650013362301.png'
               alt='Image'
               width='100%'
               height='200px'
            />
            <div>
               <h1>Compaign</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
         </Link>
      </CampaignWrapper>
   );
}

export default Campaign;
