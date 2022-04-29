import { message, Spin, Typography } from 'antd';
import React, { useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import campaignApi from '../../../../api/campaignApi';
import MainLayout from '../../../../containers/MainLayout';
import uploadFile from '../../../../firebase/uploadFile';
import ApplyForm from '../../components/ApplyForm';
import './ApplyCampaign.scss';

const { Title } = Typography;

function ApplyCampaign(props) {
   let location = useLocation();
   let history = useHistory();

   const { campaignId } = useParams();
   const { campaignDetail } = location.state;
   console.log(
      '🚀 ~ file: index.jsx ~ line 15 ~ ApplyCampaign ~ campaignDetail',
      campaignDetail
   );

   const [formLoading, setFormLoading] = useState(false);
   const [avatar, setAvatar] = useState({
      loading: false,
      url: '',
   });

   const handleApplyCampaign = async (formData) => {
      try {
         setFormLoading(true);
         const prepareDataInDb = {
            ...formData,
            campaignId,
            cvUrl: formData.uploadCV[0].xhr,
            imageUrl: formData.uploadAvatar[0].xhr,
         };
         const response = await campaignApi.applyCampaign(prepareDataInDb);

         setFormLoading(false);
         if (response.createCampaign.id && response.createCampaignTechnique) {
            message.success('Apply to campaign success!');
            return history.push('/');
         }

         message.error('Something went wrong, please try again');
      } catch (error) {
         console.log(error);
      }
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
            <div className='apply__campaign'>
               <div className='apply__campaign--col'>
                  <div className='apply__description'>
                     <Title center level={3}></Title>
                  </div>
               </div>
               <div className='apply__campaign--col'>
                  <Spin spinning={formLoading}>
                     <ApplyForm
                        handleApplyCampaign={handleApplyCampaign}
                        uploadCVToFirebase={uploadCVToFirebase}
                        uploadAvatarToFirebase={uploadAvatarToFirebase}
                        avatar={avatar}
                        campaignPosition={campaignDetail.position}
                        campaignTechnique={campaignDetail.technique}
                        campaignDescription={campaignDetail.description}
                     />
                  </Spin>
               </div>
            </div>
         </MainLayout>
      </>
   );
}

export default ApplyCampaign;
