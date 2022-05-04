import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import campaignApi from '../../../../api/campaignApi';
import Breadcrumbs from '../../../Home/components/BreadCrumb';
import {
   Button,
   Col,
   DatePicker,
   Form,
   Input,
   InputNumber,
   Layout,
   message,
   Row,
   Select,
   Space,
   Spin,
   Tag,
   Typography,
   Upload,
} from 'antd';
import { Section } from '../../../Home/components/Section/Section.styles';
import CampaignForm from '../../components/CampaignForm';
import moment from 'moment';

const { Title } = Typography;
const { Option } = Select;
const { RangePicker } = DatePicker;

function EditCampaignPage(props) {
   const { id } = useParams();
   const [campaignDetail, setCampaignDetail] = useState({});
   const [dropList, setDropList] = useState();
   const [loading, setLoading] = useState(false);
   const [initialValues, setInitialValues] = useState({});
   const [description, setDescription] = useState('');

   let history = useHistory();

   useEffect(() => {
      const getCampaignDetail = async () => {
         const getCampaignDetailRes = await campaignApi.getCampainDetail(id);
         const droplistRes = await campaignApi.getDroplist();
         setCampaignDetail(getCampaignDetailRes);
         setInitialValues({
            name: getCampaignDetailRes.name,
            quantity: getCampaignDetailRes.quantity,
            date: [
               moment(getCampaignDetailRes.start_date, 'YYYY-MM-DD'),
               moment(getCampaignDetailRes.end_date, 'YYYY-MM-DD'),
            ],
            position: getCampaignDetailRes.position.reduce((acc, item) => {
               acc.push(item.pivot.position_id);
               return acc;
            }, []),
            technique: getCampaignDetailRes.technique.reduce((acc, item) => {
               acc.push(item.pivot.technique_id);
               return acc;
            }, []),
            address: getCampaignDetailRes.address,
            image: getCampaignDetailRes.image_url,
            description: getCampaignDetailRes.description,
         });
         setDescription(getCampaignDetailRes.description);
         setDropList(droplistRes);
      };
      getCampaignDetail();
   }, [id]);

   const handleEditor = (value) => {
      setDescription(value);
   };

   const onFinish = async (values) => {
      setLoading(true);
      const newData = {
         ...values,
         name: values.name,
         address: values.address,
         start_date: values.date[0].format('YYYY-MM-DD HH:mm:ss'),
         end_date: values.date[1].format('YYYY-MM-DD HH:mm:ss'),
         quantity: values.quantity,
         description: description,
         id: campaignDetail.id,
      };
      const response = await campaignApi.editCampaign(newData);
      console.log('NEWONE', response);
      setLoading(false);
      if (response === true) {
         message.success('Create successfully');
         return history.goBack();
      }

      message.error('Create failed');
   };

   return (
      <>
         <div className='create__breadcrumb'>
            <Breadcrumbs />
         </div>
         <Section style={{ padding: '30px 20px' }}>
            <Spin spinning={loading}>
               <Layout>
                  {Object.keys(initialValues).length > 0 && (
                     <div className='content__create'>
                        <Title className='create__heading' level={3}>
                           Edit {campaignDetail?.name}
                        </Title>
                        <CampaignForm
                           dropList={dropList}
                           onFinish={onFinish}
                           handleEditor={handleEditor}
                           initialValues={initialValues}
                           isEdit={true}
                        />
                     </div>
                  )}
               </Layout>
            </Spin>
         </Section>
      </>
   );
}

export default EditCampaignPage;
