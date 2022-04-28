import { Space } from 'antd';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import MainLayout from '../../../../containers/MainLayout';
import uploadFile from '../../../../firebase/uploadFile';
import ApplyForm from '../../components/ApplyForm';

function ApplyCampaign(props) {
   const { campaignId } = useParams();
   const [avatar, setAvatar] = useState({
      loading: false,
      url: '',
   });

   const handleApplyCampaign = async (formData) => {
      console.log('formData', formData);
   };

   const uploadCVToFirebase = async (options) => {
      const { file, onSuccess, onError } = options;

      const fileUrl = await uploadFile({
         file,
         onSuccess,
         onError,
         directory: 'avatars',
      });
      console.log('🚀 ~  fileUrl', fileUrl);
   };

   const uploadAvatarToFirebase = async (options) => {
      setAvatar({
         loading: true,
         url: '',
      });
      const { file, onSuccess, onError } = options;
      const avatarUrl = await uploadFile({
         file,
         onSuccess,
         onError,
         directory: 'avatars',
      });
      setAvatar({
         loading: false,
         url: avatarUrl,
      });
      console.log('🚀 ~  avatarUrl', avatarUrl);
   };

   return (
      <>
         <MainLayout>
            <Space
               direction='vertical'
               size={'middle'}
               style={{ display: 'flex' }}
            >
               <ApplyForm
                  handleApplyCampaign={handleApplyCampaign}
                  uploadCVToFirebase={uploadCVToFirebase}
                  uploadAvatarToFirebase={uploadAvatarToFirebase}
                  avatar={avatar}
               />
            </Space>
         </MainLayout>
      </>
   );
}

export default ApplyCampaign;
