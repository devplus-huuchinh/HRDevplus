import { DownloadOutlined } from '@ant-design/icons';
import { Button, notification, Tooltip } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { CSVLink } from 'react-csv';

ExportExcel.propTypes = {
   data: PropTypes.array,
   fileName: PropTypes.string,
   campaign: PropTypes.object,
};

function ExportExcel(props) {
   const { data, fileName, campaign } = props;
   // useEffect(() => {

   // },[data])

   const structureData = () => {
      const newData = [...data];
      const structureData = newData.map((i) => {
         delete i.position_id;
         delete i.technique;
         delete i.created_at;
         delete i.updated_at;
         delete i.campaign_id;
         i.campaign_name = campaign.name;
         return i;
      });

      return structureData;
   };
   const openNotificationWithIcon = (type) => {
      notification[type]({
         message: 'Export data failure',
         description: 'Select user to export profile data!',
         duration: 2.5,
      });
   };

   return (
      <Tooltip placement='top' title='Download CSV'>
         <Button
            type='primary'
            icon={
               <CSVLink
                  data={data ? structureData() : []}
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
      </Tooltip>
   );
}

export default ExportExcel;
