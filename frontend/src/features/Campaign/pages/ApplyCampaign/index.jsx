import React, { useEffect, useState } from 'react';
import MainLayout from '../../../../containers/MainLayout';
import ApplyForm from '../../components/ApplyForm';
import { Space, Breadcrumb, Typography, Spin } from 'antd';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import campaignApi from '../../../../api/campaignApi';

const { Text } = Typography;
function ApplyCampaign(props) {
   const { campaignId } = useParams();

   const [loading, setLoading] = useState(false);

   const [campaignDetail, setCampaignDetail] = useState({});

   useEffect(() => {
      const getCampaignById = async () => {
         try {
            const responseCampaignDetail = await campaignApi.getCampainDetail(
               campaignId
            );
            setCampaignDetail(responseCampaignDetail);
            setLoading(true);
         } catch (error) {
            console.log(
               '🚀 ~ file: index.jsx ~ line 36 ~ getCampaignById ~ error',
               error
            );
         }
      };
      getCampaignById();
   }, [campaignId]);
   return (
      <>
         {loading ? (
            <MainLayout>
               <Space
                  direction='vertical'
                  size={'middle'}
                  style={{ display: 'flex' }}
               >
                  <Breadcrumb>
                     <Breadcrumb.Item>
                        <Link to='/'>Home</Link>
                     </Breadcrumb.Item>
                     <Breadcrumb.Item>
                        <Link to={`/campaign/${campaignId}`}>
                           {campaignDetail.name}
                        </Link>
                     </Breadcrumb.Item>
                     <Breadcrumb.Item>
                        <Text>Apply to {campaignDetail.name}</Text>
                     </Breadcrumb.Item>
                  </Breadcrumb>

                  <ApplyForm />
               </Space>
            </MainLayout>
         ) : (
            <Spin
               tip='Loading...'
               size='large'
               style={{
                  width: '100vw',
                  height: '100vh',
                  maxHeight: 'unset',
                  display: 'flex',
                  gap: '20px',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
               }}
            />
         )}
      </>
   );
}

export default ApplyCampaign;
