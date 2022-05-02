import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { DatePicker } from 'antd';

CampaignChart.propTypes = {
   campaignStatistic: PropTypes.array,
   handleChangeCampaignYear: PropTypes.func,
};

CampaignChart.defaultProps = {
   campaignStatistic: [],
   handleChangeCampaignYear: null,
};

function CampaignChart(props) {
   const { campaignStatistic, handleChangeCampaignYear, campaignYear } = props;

   return (
      <>
         <DatePicker
            onChange={handleChangeCampaignYear}
            picker='year'
            allowClear={false}
            value={campaignYear}
         />
         <Line
            height={150}
            data={{
               labels: campaignStatistic?.map(({ month }) => month),
               datasets: [
                  {
                     data: campaignStatistic?.map(({ count }) => count),
                     label: 'Campaign Statistic',
                     borderColor: '#36A2EC',
                     backgroundColor: '#9AD0F5',
                     tension: 0.1,
                  },
               ],
            }}
            options={{
               scales: {
                  ticks: {
                     stepSize: 1,
                  },
               },
            }}
         />
      </>
   );
}

export default CampaignChart;
