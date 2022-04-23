import React from 'react';
import PropTypes from 'prop-types';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

SearchProfiles.propTypes = {};

function SearchProfiles(props) {
   const { Search } = Input;
   return (
      <div>
         <Search
            placeholder='input search text'
            allowClear
            //   onSearch={onSearch}
            style={{}}
         />
      </div>
   );
}

export default SearchProfiles;
