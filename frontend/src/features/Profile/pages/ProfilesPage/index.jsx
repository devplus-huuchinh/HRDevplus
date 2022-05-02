import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import SearchProfiles from '../../components/SearchProfile';
import TableProfile from '../../components/TableProfile';
import { Typography, notification, Breadcrumb, Space } from 'antd';
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
   const [tableLoading, setTableLoading] = useState(true);

   //EFFECT
   useEffect(() => {
      const getAllProfileInDb = async () => {
         const ProfilesRes = await profileApi.getAllProfile({
            campaign_id: id,
         });
         const dropProfile = await profileApi.dropdownData();
         console.log('ProfilesRes', ProfilesRes);
         setTableLoading(false);
         setProfiles(ProfilesRes);
         setStep(dropProfile.step);
         setStatus(dropProfile.status);
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

   const editProfile = async (editCol, data) => {
      const test = await profileApi.editStep({ field: editCol, data });
      console.log(test);
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

   return (
      <div className='profiles-container'>
         <Space
            direction='vertical'
            size={'middle'}
            style={{ display: 'flex' }}
         >
            {/* Breadcumb */}
            <Breadcrumb>
               <Breadcrumb.Item>Home</Breadcrumb.Item>
               <Breadcrumb.Item>
                  <a href=''>Application Center</a>
               </Breadcrumb.Item>
               <Breadcrumb.Item>
                  <a href=''>Application List</a>
               </Breadcrumb.Item>
               <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
            {/* End breadcumb */}
            <Title>All Profile</Title>
            <SearchProfiles selected={selected} />
            <TableProfile
               profiles={profiles}
               step={step}
               status={status}
               editProfile={editProfile}
               handleSingleRow={handleSingleRow}
               handleMultiRow={handleMultiRow}
               selected={selected}
               tableLoading={tableLoading}
            />
         </Space>
      </div>
   );
}

export default ProfilesPage;
