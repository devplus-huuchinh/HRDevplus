import React from 'react';
// import PropTypes from 'prop-types';
import { Input } from 'antd';

CandidateSearchBar.propTypes = {};

const { Search } = Input;

function CandidateSearchBar(props) {
   return (
      <div>
         <Search />
      </div>
   );
}

export default CandidateSearchBar;
