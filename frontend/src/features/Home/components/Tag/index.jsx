import React from 'react';
import './Tag.scss';

function Tag(props) {
   const { tagContent } = props;
   const mdColors = ['#f94144', '#f3722c', '#277da1', '#ffd60a', '#ff758f'];

   const getColor = () => {
      const borderColor = mdColors[Math.floor(Math.random() * mdColors.length)];
      return borderColor;
   };

   return (
      <div className='custom-tag' style={{ color: getColor() }}>
         {tagContent}
      </div>
   );
}

export default Tag;
