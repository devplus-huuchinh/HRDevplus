import { Input } from 'antd';
import React from 'react';
// import PropTypes from 'prop-types';

CampaignSearchBar.propTypes = {};

const { Search } = Input;

function CampaignSearchBar(props) {
   return (
      <div>
         <Search />
      </div>
   );
}

export default CampaignSearchBar;
