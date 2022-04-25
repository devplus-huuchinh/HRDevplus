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
   const [status, setStatus] = useState([]);
   const [selected, setSelected] = useState([]);
   //EFFECT
   useEffect(() => {
      const getAllProfileInDb = async () => {
         const ProfilesRes = await profileApi.getAllProfile({
            campaign_id: id,
         });
         const dropProfile = await profileApi.dropdownData();
         console.log('ProfilesRes', ProfilesRes);
         console.log('Step', dropProfile.step);
         console.log('Status', dropProfile.status);
         setProfiles(ProfilesRes);
         setStep(dropProfile.step);
         setStatus(dropProfile.status);
      };
      getAllProfileInDb();
   }, []);

   //NOTIFICATION
   const openNotificationWithIcon = (type) => {
      notification[type]({
         message: 'Update successful',
      });
   };

   const { Title } = Typography;

   const editProfile = async (editCol, data) => {
      const test = await profileApi.editStep({ field: editCol, data });
      console.log(test);
      return openNotificationWithIcon('success');
   };

   const handleSelected = (data) => {
      const checkDuplicate = selected.filter(function (val) {
         return data.indexOf(val) > -1;
      });
      return setSelected(checkDuplicate);
   };

   return (
      <div className='profiles-container'>
         <Title>Campaign name</Title>
         <SearchProfiles />
         <TableProfile
            profiles={profiles}
            step={step}
            status={status}
            editProfile={editProfile}
            handleSelected={handleSelected}
         />
      </div>
   );
}

export default ProfilesPage;
