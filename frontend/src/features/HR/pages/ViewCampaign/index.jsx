import { PlusCircleFilled } from '@ant-design/icons';
import { Button, message, Spin, Switch, Table, Tag } from 'antd';
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

   const [formSearchData, setFormSearchData] = useState({
      name: '',
      position_campaign: [],
      is_active: [],
      start_date: '1970-01-01',
      end_date: '2100-01-01',
      campaign_technique: [],
   });
   const [page, setPage] = useState(1);
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
            setLoading(true);
            const responseCampaign = await searchApi.searchForCandidate({
               ...formSearchData,
               page,
            });

            setData(responseCampaign);
            setLoading(false);
         } catch (error) {
            console.log(error);
         }
      };
      handleData();
   }, [formSearchData, page]);

   useEffect(() => {
      const getPositionsInDb = async () => {
         try {
            const responsePosition = await positionApi.getAll();
            setPositions(responsePosition);
         } catch (error) {
            console.log(error);
         }
      };
      getPositionsInDb();
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

      setFormSearchData(prepareData);
      setLoading(false);
   };

   const handleChangePage = (value) => {
      setPage(value);
   };

   const columns = [
      {
         title: 'Name',
         dataIndex: 'name',
      },
      {
         title: 'Position',
         dataIndex: 'position',
         width: '8%',
         render: (tags) => (
            <>
               {tags.map((tag) => {
                  let color = tag.length > 5 ? 'geekblue' : 'green';
                  if (tag.name === 'Intern') {
                     color = 'volcano';
                  }
                  return (
                     <Tag
                        color={color}
                        key={tag.name}
                        style={{ marginBottom: 3 }}
                     >
                        {tag.name.toUpperCase()}
                     </Tag>
                  );
               })}
            </>
         ),
      },
      {
         title: 'Address',
         dataIndex: 'address',
      },
      {
         title: 'Start Date',
         dataIndex: 'start_date',
         width: '12%',
      },
      {
         title: 'End Date',
         dataIndex: 'end_date',
         width: '12%',
      },
      {
         title: 'Technology',
         dataIndex: 'technique',
         width: '8%',
         render: (tags) => (
            <>
               {tags.map((tag) => {
                  let color = tag.length > 5 ? 'geekblue' : 'green';
                  if (tag.name === 'PHP') {
                     color = 'volcano';
                  }
                  return (
                     <Tag
                        color={color}
                        key={tag.name}
                        style={{ marginBottom: 3 }}
                     >
                        {tag.name}
                     </Tag>
                  );
               })}
            </>
         ),
      },
      {
         title: 'Active',
         render: (record) => (
            <Switch
               size='small'
               checked={record.is_active}
               onChange={(value) => {
                  handleActive(value, record.id);
               }}
            />
         ),
      },
      {
         title: 'Action',
         width: '20%',
         render: (record) => (
            <div>
               <Button
                  type='primary'
                  style={{ marginRight: '10px' }}
                  onClick={() =>
                     history.push(`/dashboard/campaign/${record.id}/profile`)
                  }
               >
                  List CVs
               </Button>
               <Button
                  type='primary'
                  onClick={() =>
                     history.push(`/dashboard/campaign/edit/${record.id}`)
                  }
               >
                  Edit
               </Button>
            </div>
         ),
      },
      // {
      //    title: 'Edit',
      //    dataIndex: 'id',
      //    render: (record) => (

      //    ),
      // },
      // {
      //    title: 'Active',
      //    // dataIndex: 'id',
      //    render: (record) => (
      //       <Switch
      //          size='small'
      //          checked={record.is_active}
      //          onChange={(value) => {
      //             handleActive(value, record.id);
      //          }}
      //       />
      //    ),
      // },
   ];

   const handleActive = async (isActive, id) => {
      const index = data.data.findIndex((item) => item.id === id);
      setData((pre) => {
         pre.data[index].is_active = isActive;
         return { ...pre };
      });
      const updateActiveStatusRes = await campaignApi.editActive({
         isActive: isActive,
         id: id,
      });
      if (updateActiveStatusRes.message === 'success') {
         return message.success('Edit active status successfully');
      }
      return message.success('Edit active status failed');
   };

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
                     dataSource={data.data}
                     rowKey={(record) => record.id}
                     pagination={{
                        current: page,
                        total: data.total,
                        pageSize: data.per_page,
                        onChange: handleChangePage,
                     }}
                  />
               </Spin>
            </div>
         </div>
      </div>
   );
}

export default ViewCampaign;
