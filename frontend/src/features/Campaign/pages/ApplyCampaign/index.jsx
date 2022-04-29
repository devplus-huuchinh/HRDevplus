import { message, Typography } from 'antd';
import parse from 'html-react-parser';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import campaignApi from '../../../../api/campaignApi';
import MainLayout from '../../../../containers/MainLayout';
import uploadFile from '../../../../firebase/uploadFile';
import ApplyForm from '../../components/ApplyForm';
import './ApplyCampaign.scss';

const { Title, Paragraph } = Typography;

function ApplyCampaign(props) {
   let location = useLocation();
   let history = useHistory();

   const { campaignId } = useParams();
   const { campaignDetail } = location.state;

   const [isSticky, setSticky] = useState(false);
   const ref = useRef(null);

   const [avatar, setAvatar] = useState({
      loading: false,
      url: '',
   });

   const handleApplyCampaign = async (formData) => {
      try {
         const prepareDataInDb = {
            ...formData,
            campaignId,
            cvUrl: formData.uploadCV[0].xhr,
            imageUrl: formData.uploadAvatar[0].xhr,
         };
         const response = await campaignApi.applyCampaign(prepareDataInDb);

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
      console.log('🚀 ~ fileUrl', fileUrl);
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
   };

   const handleScroll = () => {
      if (ref.current) {
         setSticky(ref.current.getBoundingClientRect().top <= 60);
      }
   };

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <>
         <MainLayout>
            <div>
               Breadcrumb
               {/* Please make breadcrumb here. Thanks */}
            </div>
            <div className='apply__campaign'>
               <div className='apply__campaign--col'>
                  <div className='apply__description'>
                     <Title
                        level={3}
                        style={{ textAlign: 'center', color: '#f6901e' }}
                     >
                        {campaignDetail.name}
                     </Title>
                     <hr />
                     <Paragraph style={{ marginTop: '20px' }}>
                        {parse(campaignDetail.description)}
                     </Paragraph>
                  </div>
               </div>
               <div
                  className={`apply__campaign--col sticky-wrapper${
                     isSticky
                        ? 'apply__campaign--col sticky--form'
                        : 'apply__campaign--col '
                  }`}
                  ref={ref}
               >
                  <ApplyForm
                     handleApplyCampaign={handleApplyCampaign}
                     uploadCVToFirebase={uploadCVToFirebase}
                     uploadAvatarToFirebase={uploadAvatarToFirebase}
                     avatar={avatar}
                     campaignPosition={campaignDetail.position}
                     campaignTechnique={campaignDetail.technique}
                     campaignDescription={campaignDetail.description}
                  />
               </div>
            </div>
         </MainLayout>
      </>
   );
}

export default ApplyCampaign;
