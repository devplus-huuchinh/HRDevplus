import { Input } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import './CandidateSearchBar.scss';

CandidateSearchBar.propTypes = {
   handleSubmitCandidateSearch: PropTypes.func,
};

CandidateSearchBar.defaultProps = {
   handleSubmitCandidateSearch: null,
};

const { Search } = Input;

function CandidateSearchBar(props) {
   const { handleSubmitCandidateSearch, defaultValue } = props;

   const onSubmitSearchKeyword = (value) => {
      handleSubmitCandidateSearch(value);
   };

   return (
      <div className='home-search'>
         <Search
            allowClear
            enterButton='Search'
            size='large'
            onSearch={onSubmitSearchKeyword}
            placeholder='Search by campaign...'
            defaultValue={defaultValue}
         />
      </div>
   );
}

export default CandidateSearchBar;
