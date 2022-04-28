import { DownloadOutlined } from '@ant-design/icons';
import { Button, notification } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { CSVLink } from 'react-csv';

ExportExcel.propTypes = {
   data: PropTypes.array,
   fileName: PropTypes.string,
};

function ExportExcel(props) {
   const { data, fileName } = props;
   const openNotificationWithIcon = (type) => {
      notification[type]({
         message: 'Export data failure',
         description: 'Select user to export profile data!',
         duration: 2.5,
      });
   };

   return (
      <Button
         type='primary'
         icon={
            <CSVLink
               data={data ? data : []}
               filename={fileName}
               onClick={(event) => {
                  if (data.length === 0) {
                     openNotificationWithIcon('error');
                     return false;
                  }
               }}
            >
               <DownloadOutlined />
            </CSVLink>
         }
      ></Button>
   );
}

export default ExportExcel;
