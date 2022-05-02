import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { DatePicker } from 'antd';

DashboardChart.propTypes = {
   data: PropTypes.array,
   handleChangeYear: PropTypes.func,
   backgroundColor: PropTypes.string,
   borderColor: PropTypes.string,
   label: PropTypes.string,
   height: PropTypes.number,
};

DashboardChart.defaultProps = {
   data: [],
   handleChangeYear: null,
   backgroundColor: '',
   borderColor: '',
   label: '',
   height: 350,
};

function DashboardChart(props) {
   const {
      data,
      handleChangeYear,
      year,
      borderColor,
      backgroundColor,
      label,
      height,
   } = props;

   return (
      <div style={{ marginTop: 20 }}>
         <DatePicker
            onChange={handleChangeYear}
            picker='year'
            allowClear={false}
            value={year}
         />
         <Line
            height={height}
            data={{
               labels: data?.map(({ month }) => month),
               datasets: [
                  {
                     data: data?.map(({ count }) => count),
                     label: label,
                     borderColor: borderColor,
                     backgroundColor: backgroundColor,
                     tension: 0.1,
                  },
               ],
            }}
            options={{
               scales: {
                  ticks: {
                     stepSize: 1,
                  },
                  yAxes: [
                     {
                        ticks: {
                           precision: 0,
                        },
                     },
                  ],
               },
            }}
         />
      </div>
   );
}

export default DashboardChart;
