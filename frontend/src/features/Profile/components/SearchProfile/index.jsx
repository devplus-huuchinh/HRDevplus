import React from 'react';
import PropTypes from 'prop-types';
import { Input, Space, Tag } from 'antd';
import ExportExcel from '../ExportExcel/index';
import './searchProfile.scss';
SearchProfiles.propTypes = {
   selected: PropTypes.array,
};

function SearchProfiles(props) {
   const { selected } = props;
   const { Search } = Input;
   return (
      <div className='search_container'>
         <Search
            className='search__input_wrap'
            placeholder='input search text'
            allowClear
            //   onSearch={onSearch}
         />
         <div className='search__rightside_wrap'>
            {selected.length != 0 ? (
               <Tag className='search__selected_tag' color='geekblue'>
                  {selected.length == 1
                     ? '1 user selected'
                     : `${selected.length} users selected`}
               </Tag>
            ) : (
               ''
            )}

            <ExportExcel
               className='search__export'
               data={selected}
               fileName='Profiles'
            />
         </div>
      </div>
   );
}

export default SearchProfiles;
