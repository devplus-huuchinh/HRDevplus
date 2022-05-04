import { notification, Pagination, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import profileApi from '../../../../api/profileApi';
import searchApi from '../../../../api/searchApi';
import BreadCrumbs from '../../../Home/components/BreadCrumb';
import SearchProfiles from '../../components/SearchProfile';
import TableProfile from '../../components/TableProfile';
import './profilesPage.scss';

function ProfilesPage(props) {
   //PARAM
   const { id } = useParams();

   //STATE
   const [profiles, setProfiles] = useState([]);
   const [step, setStep] = useState([]);
   // const [status, setStatus] = useState([]);
   const [selected, setSelected] = useState([]);
   const [tableLoading, setTableLoading] = useState(true);
   const [campaign, setCampaign] = useState({});
   const [pagination, setPagination] = useState({});
   console.log('🚀 ~ pagination', pagination);
   const [page, setPage] = useState(1);
   const [searchFormData, setSearchFormData] = useState({
      first_name: '',
      email: '',
      phone_numb: '',
      status: [],
      campaign_id: id,
   });

   //EFFECT
   useEffect(() => {
      const getAllProfileInDb = async () => {
         setTableLoading(true);
         const ProfilesRes = await profileApi.getAllProfile({
            campaign_id: id,
         });
         const searchResponse = await searchApi.searchProfile({
            ...searchFormData,
            campaign_id: id,
            page,
         });
         const dropProfile = await profileApi.dropdownData();

         setTableLoading(false);
         setProfiles(searchResponse.data);
         setStep(dropProfile);
         setCampaign(ProfilesRes);
         setPagination(searchResponse);
      };
      getAllProfileInDb();
   }, [id, searchFormData, page]);

   //NOTIFICATION
   const openNotificationWithIcon = (type) => {
      notification[type]({
         message: 'Update successful',
         duration: 2,
      });
   };

   const handleChangeSearchFormData = (formData) => {
      setSearchFormData(formData);
   };

   const handleChangePage = (value) => {
      setPage(value);
   };

   const editProfile = async (id, step) => {
      let status;
      switch (step) {
         case 'NEW':
            status = 'PENDING';
            break;
         case 'TEST':
            status = 'PROCESSING';
            break;
         case 'INTERVIEW':
            status = 'PROCESSING';
            break;
         case 'CONFIRM':
            status = 'PROCESSING';
            break;
         case 'CONSIDER':
            status = 'PROCESSING';
            break;
         case 'EMPLOYEE':
            status = 'APPROVE';
            break;
      }
      const index = profiles.findIndex((item) => item.id === id);
      setProfiles((pre) => {
         pre[index].status = status;
         pre[index].step = step;
         return [...pre];
      });
      const UpdateRes = await profileApi.editStep({
         id: id,
         step: step,
         status: status,
      });
      return openNotificationWithIcon('success');
   };

   const handleSingleRow = (status, data) => {
      if (status === true) {
         return setSelected((pre) => {
            return [...pre, data];
         });
      }
      return setSelected((pre) => {
         return pre.filter((item) => item.id !== data.id);
      });
   };

   const handleMultiRow = (status, data) => {
      if (status === true) {
         return setSelected((pre) => {
            return [...pre, ...data];
         });
      }
      return setSelected((pre) => {
         const idSelected = selected.map((item) => {
            return item.id;
         });
         return pre.filter((item) => idSelected.indexOf(item.id) === -1);
      });
   };

   const handleNextStep = async (id, currentStep) => {
      let stepUpdated;
      let statusUpdated;
      switch (currentStep) {
         case 'NEW':
            stepUpdated = 'TEST';
            statusUpdated = 'PROCESSING';
            break;
         case 'TEST':
            stepUpdated = 'INTERVIEW';
            statusUpdated = 'PROCESSING';
            break;
         case 'INTERVIEW':
            stepUpdated = 'CONFIRM';
            statusUpdated = 'PROCESSING';
            break;
         case 'CONFIRM':
            stepUpdated = 'CONSIDER';
            statusUpdated = 'PROCESSING';
            break;
         case 'CONSIDER':
            stepUpdated = 'EMPLOYEE';
            statusUpdated = 'APPROVE';
            break;
         case 'EMPLOYEE':
            stepUpdated = 'NULL';
            statusUpdated = 'APPROVE';
            break;
      }
      const index = profiles.findIndex((item) => item.id === id);
      setProfiles((pre) => {
         pre[index].status = statusUpdated;
         pre[index].step = stepUpdated;
         return [...pre];
      });
      const UpdateRes = await profileApi.editStep({
         id: id,
         status: statusUpdated,
         step: stepUpdated,
      });
      return openNotificationWithIcon('success');
   };

   const handleReject = async (id) => {
      const index = profiles.findIndex((item) => item.id === id);
      setProfiles((pre) => {
         pre[index].status = 'REJECT';
         return [...pre];
      });
      const UpdateRes = await profileApi.editStep({
         id: id,
         status: 'REJECT',
         step: profiles[index].step,
      });
      return openNotificationWithIcon('success');
   };

   return (
      <div className='profiles-container'>
         <Space
            direction='vertical'
            size={'middle'}
            style={{ display: 'flex' }}
         >
            <BreadCrumbs profileName={campaign.name} />
            <SearchProfiles
               selected={selected}
               handleChangeSearchFormData={handleChangeSearchFormData}
               campaignId={id}
            />
            <TableProfile
               profiles={profiles}
               step={step}
               // status={status}
               editProfile={editProfile}
               handleSingleRow={handleSingleRow}
               handleMultiRow={handleMultiRow}
               selected={selected}
               tableLoading={tableLoading}
               handleNextStep={handleNextStep}
               handleReject={handleReject}
            />
            {Object.keys(pagination).length > 0 && (
               <Pagination
                  current={page}
                  total={pagination?.total}
                  pageSize={pagination?.per_page}
                  onChange={handleChangePage}
               />
            )}
         </Space>
      </div>
   );
}

export default ProfilesPage;
