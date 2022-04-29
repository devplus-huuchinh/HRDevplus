import { message, Space, Spin } from 'antd';
import React, { useState } from 'react';
import {
   useLocation,
   useParams,
   useHistory,
   useRouteMatch,
} from 'react-router-dom';
import campaignApi from '../../../../api/campaignApi';
import emailApi from '../../../../api/emailApi';
import MainLayout from '../../../../containers/MainLayout';
import uploadFile from '../../../../firebase/uploadFile';
import ApplyForm from '../../components/ApplyForm';

function ApplyCampaign(props) {
   let location = useLocation();
   let history = useHistory();
   let match = useRouteMatch();

   const { campaignId } = useParams();
   const { campaignDetail } = location.state;
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

         if (response.createCampaign.id && response.createCampaignTechnique) {
            await emailApi.receiveConfirmation({
               candidateName: response.createCampaign.last_name,
               to: response.createCampaign.email,
               position: campaignDetail.position.find(
                  (i) =>
                     i.pivot.position_id === response.createCampaign.position_id
               ).name,
            });

            message.success('Apply to campaign success!');
            setFormLoading(false);

            return history.push({
               pathname: `${match.url}/thank-you`,
               state: {
                  candidateInfo: response.createCampaign,
                  campaignDetail,
               },
            });
         }

         setFormLoading(false);
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
         directory: 'cv',
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
               <Spin spinning={formLoading}>
                  <ApplyForm
                     handleApplyCampaign={handleApplyCampaign}
                     uploadCVToFirebase={uploadCVToFirebase}
                     uploadAvatarToFirebase={uploadAvatarToFirebase}
                     avatar={avatar}
                     campaignPosition={campaignDetail.position}
                     campaignTechnique={campaignDetail.technique}
                  />
               </Spin>
            </Space>
         </MainLayout>
      </>
   );
}

export default ApplyCampaign;
