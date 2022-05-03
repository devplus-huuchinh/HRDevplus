import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import SearchProfiles from '../../components/SearchProfile';
import TableProfile from '../../components/TableProfile';
import { Typography, notification } from 'antd';
import './profilesPage.scss';
import profileApi from '../../../../api/profileApi';

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

   //EFFECT
   useEffect(() => {
      const getAllProfileInDb = async () => {
         const ProfilesRes = await profileApi.getAllProfile({
            campaign_id: id,
         });
         const dropProfile = await profileApi.dropdownData();
         console.log('ProfilesRes', ProfilesRes);
         setTableLoading(false);
         setProfiles(ProfilesRes.profile);
         setStep(dropProfile);
         setCampaign(ProfilesRes);
      };
      getAllProfileInDb();
   }, [id]);

   //NOTIFICATION
   const openNotificationWithIcon = (type) => {
      notification[type]({
         message: 'Update successful',
         duration: 2,
      });
   };

   const { Title } = Typography;

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
         <Title>{campaign.name}</Title>
         <SearchProfiles selected={selected} />
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
      </div>
   );
}

export default ProfilesPage;
