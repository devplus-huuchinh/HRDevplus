import React from 'react';
import PropTypes from 'prop-types';
import './StatisticCard.scss';

StatisticCard.propTypes = {
   icon: PropTypes.node,
   iconBackground: PropTypes.string,
   contentBackground: PropTypes.string,
   number: PropTypes.number,
   title: PropTypes.string,
};

function StatisticCard(props) {
   const { icon, iconBackground, contentBackground, number, title } = props;

   return (
      <div className='statistic-card'>
         <div
            className='card--icon'
            style={{ backgroundColor: iconBackground }}
         >
            {icon}
         </div>
         <div
            className='card--content'
            style={{ backgroundColor: contentBackground }}
         >
            <div className='card--number'>{number}</div>
            <div className='card--title'>{title}</div>
         </div>
      </div>
   );
}

export default StatisticCard;
