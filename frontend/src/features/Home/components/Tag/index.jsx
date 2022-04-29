import React from 'react';
import styled from 'styled-components';

function Tag(props) {
   const { tagContent } = props;
   const mdColors = ['#f94144', '#f3722c', '#277da1', '#ffd60a', '#ff758f'];

   const getColor = () => {
      const borderColor = mdColors[Math.floor(Math.random() * mdColors.length)];
      return borderColor;
   };
   const TagWrapper = styled.span`
      padding: 5px;
      color: ${getColor};
      border-top-left-radius: 10px;
      border-bottom-right-radius: 10px;
      border: 1px solid #fb5607;
      font-weight: bold;
   `;

   return <TagWrapper>{tagContent}</TagWrapper>;
}

export default Tag;
