import React from 'react';
import './Tag.scss';

function Tag(props) {
   const { tagContent } = props;
   const mdColors = ['#007bff', '#6c757d', '#28a745', '#dc3545', '#ffc107'];

   const getColor = () => {
      const borderColor = mdColors[Math.floor(Math.random() * mdColors.length)];
      return borderColor;
   };

   return (
      <div className='custom-tag' style={{ backgroundColor: getColor() }}>
         {tagContent}
      </div>
   );
}

export default Tag;
