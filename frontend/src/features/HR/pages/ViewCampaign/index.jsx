import { PlusCircleFilled } from '@ant-design/icons';
import { Button, Spin, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import campaignApi from '../../../../api/campaignApi';
import positionApi from '../../../../api/positionApi';
import searchApi from '../../../../api/searchApi';
import BreadCrumbs from '../../../Home/components/BreadCrumb';
import CampaignSearchBar from '../../components/CampaignSearchBar';
import './ViewCampaign.scss';

ViewCampaign.propTypes = {};

function ViewCampaign(props) {
   let history = useHistory();

   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);
   const [positions, setPositions] = useState([]);
   const [status] = useState([
      {
         id: 1,
         name: 'TRUE',
      },
      {
         id: 0,
         name: 'FALSE',
      },
   ]);

   useEffect(() => {
      const handleData = async () => {
         try {
            const db = await campaignApi.getCampainsForHr();
            const responsePosition = await positionApi.getAll();

            setPositions(responsePosition);
            setLoading(false);
            setData(db);
         } catch (error) {
            console.log(error);
         }
      };
      handleData();
   }, []);

   const handleOnFinishSearch = async (formData) => {
      setLoading(true);
      const prepareData = {
         ...formData,
         start_date:
            (Array.isArray(formData.dateRange) &&
               formData.dateRange[0]?.format('YYYY-MM-DD')) ||
            '1970-01-01',
         end_date:
            (Array.isArray(formData.dateRange) &&
               formData.dateRange[1]?.format('YYYY-MM-DD')) ||
            '2100-01-01',
         campaign_technique: [],
      };

      delete prepareData.dateRange;

      const searchResponse = await searchApi.searchForCandidate({
         ...prepareData,
      });
      setLoading(false);
      setData(searchResponse);
   };

   const columns = [
      {
         title: 'Name',
         dataIndex: 'name',
         width: '25%',
      },
      {
         title: 'Position',
         dataIndex: 'position',
         render: (tags) => (
            <>
               {tags.map((tag) => {
                  let color = tag.length > 5 ? 'geekblue' : 'green';
                  if (tag.name === 'Intern') {
                     color = 'volcano';
                  }
                  return (
                     <Tag color={color} key={tag.name}>
                        {tag.name.toUpperCase()}
                     </Tag>
                  );
               })}
            </>
         ),
         width: '20%',
      },
      {
         title: 'Address',
         dataIndex: 'address',
         width: '15%',
      },
      {
         title: 'Start Date',
         dataIndex: 'start_date',
         width: '20%',
      },
      {
         title: 'End Date',
         dataIndex: 'end_date',
         width: '20%',
      },
      {
         title: 'Technology',
         dataIndex: 'technique',
         render: (tags) => (
            <>
               {tags.map((tag) => {
                  let color = tag.length > 5 ? 'geekblue' : 'green';
                  if (tag.name === 'PHP') {
                     color = 'volcano';
                  }
                  return (
                     <Tag color={color} key={tag.name}>
                        {tag.name}
                     </Tag>
                  );
               })}
            </>
         ),
      },
      {
         title: 'Active',
         dataIndex: 'is_active',
         width: '20%',
         render: (tags) => (
            <>
               <Tag>{tags === 0 ? 'false' : 'true'}</Tag>
            </>
         ),
      },
      {
         title: 'Detail',
         dataIndex: 'id',
         render: (record) => (
            <Button
               type='primary'
               onClick={() => history.push(`/dashboard/profile/${record}`)}
            >
               Detail
            </Button>
         ),
      },
   ];

   return (
      <div className='view-campaign'>
         <div>
            <BreadCrumbs />
         </div>
         <div className='view-campaign--header'>
            <CampaignSearchBar
               positions={positions}
               status={status}
               handleOnFinishSearch={handleOnFinishSearch}
            />
         </div>

         <div className='view-campaign--content'>
            <div className='view-campaign--create'>
               <Button
                  type='primary'
                  shape='round'
                  icon={<PlusCircleFilled />}
                  onClick={() => history.push('/dashboard/campaign/create')}
               >
                  Create Campaign
               </Button>
            </div>
            <div className='view-campaign--table'>
               <Spin spinning={loading}>
                  <Table
                     columns={columns}
                     dataSource={data}
                     rowKey={(record) => record.id}
                  />
               </Spin>
            </div>
         </div>
      </div>
   );
}

export default ViewCampaign;
