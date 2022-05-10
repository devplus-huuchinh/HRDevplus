import { SettingOutlined } from '@ant-design/icons';
import {
   Button,
   Col,
   DatePicker,
   Image,
   message,
   Modal,
   Row,
   Select,
   Space,
   Spin,
   Typography,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import emailApi from '../../../../api/emailApi';
import profileApi from '../../../../api/profileApi';
import ProfileDetail from '../../components/ProfileDetail';
import './profileDetailPage.scss';

// ProfileDetailPage.propTypes = {};
const { Option } = Select;
const { Title, Text } = Typography;

function ProfileDetailPage(props) {
   const { id } = useParams();
   const [data, setData] = useState({});
   const [step, setStep] = useState([]);
   const [loading, setLoading] = useState(true);
   const [isModalVisible, setIsModalVisible] = useState(false);
   const [acceptTime, setAcceptTime] = useState([]);

   useEffect(() => {
      const getProfileDetail = async () => {
         try {
            const profileDetailRes = await profileApi.profileDetail({ id: id });
            const dropProfile = await profileApi.dropdownData();
            setStep(dropProfile);
            setLoading(false);
            setData(profileDetailRes);
         } catch (error) {
            console.log(error);
         }
      };
      getProfileDetail();
   }, [id]);

   const { RangePicker } = DatePicker;

   const editProfile = async (id, step) => {
      let status;
      switch (step) {
         case 'NEW':
            status = 'PENDING';
            break;
         case 'TEST':
            status = 'PROCESSING';
            await handleInviteTest(id);
            break;
         case 'INTERVIEW':
            status = 'PROCESSING';
            await handleInviteInterview(id);
            break;
         case 'CONFIRM':
            status = 'PROCESSING';
            break;
         case 'CONSIDER':
            status = 'PROCESSING';
            break;
         case 'EMPLOYEE':
            status = 'APPROVE';
            modalAccept();
            break;
         default:
            message.error('Something went wrong');
            break;
      }
      setData({
         ...data,
         step: step,
         status: status,
      });
      await profileApi.editStep({
         id: id,
         step: step,
         status: status,
      });
      // return openNotificationWithIcon('success');
   };

   //email
   const handleInviteTest = async (id) => {
      // const candidate = profiles.find((item) => item.id === id);
      await emailApi.inviteTest({
         candidateName: `${data.last_name} ${data.first_name}`,
         position: data.position.name,
         to: data.email,
      });
      return message.success('Mail has sent successfully');
   };

   const handleInviteInterview = async (id) => {
      // const candidate = profiles.find((item) => item.id === id);
      await emailApi.inviteInterview({
         candidateName: `${data.last_name} ${data.first_name}`,
         position: data.position.name,
         to: data.email,
      });
      return message.success('Mail has sent successfully');
   };

   const handleAcceptCv = async () => {
      // const candidate = profiles.find((item) => item.id === id);
      await emailApi.acceptCv({
         candidateName: `${data.last_name} ${data.first_name}`,
         to: data.email,
         start_date: acceptTime[0].format('YYYY-MM-DD HH:mm'),
         end_date: acceptTime[1].format('YYYY-MM-DD HH:mm'),
         position: data.position.name,
      });
      return message.success('Mail has sent successfully');
   };

   const handleRejectCv = async (id) => {
      // const candidate = profiles.find((item) => item.id === id);
      await emailApi.rejectCv({
         candidateName: `${data.last_name} ${data.first_name}`,
         to: data.email,
      });
      return message.success('Reject mail has sent successfully');
   };

   const handleRejectAfterTest = async (id) => {
      // const candidate = profiles.find((item) => item.id === id);
      await emailApi.rejectAfterTest({
         candidateName: `${data.last_name} ${data.first_name}`,
         to: data.email,
      });
      return message.success('Reject mail has sent successfully');
   };

   const handleNextStep = async (id, currentStep) => {
      let stepUpdated;
      let statusUpdated;
      switch (currentStep) {
         case 'NEW':
            stepUpdated = 'TEST';
            statusUpdated = 'PROCESSING';
            await handleInviteTest(id);
            break;
         case 'TEST':
            stepUpdated = 'INTERVIEW';
            statusUpdated = 'PROCESSING';
            await handleInviteInterview(id);
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
            modalAccept();
            break;
         case 'EMPLOYEE':
            stepUpdated = 'NULL';
            statusUpdated = 'APPROVE';
            break;
         default:
            message.error('Something went wrong');
            break;
      }

      // const index = profiles.findIndex((item) => item.id === id);
      // setProfiles((pre) => {
      //    // pre[index].status = statusUpdated;
      //    // pre[index].step = stepUpdated;
      //    return [...pre];
      // });
      setData({
         ...data,
         step: stepUpdated,
         status: statusUpdated,
      });
      await profileApi.editStep({
         id: id,
         status: statusUpdated,
         step: stepUpdated,
      });
      // return openNotificationWithIcon('success');
   };

   const handleReject = async (id) => {
      // const index = profiles.findIndex((item) => item.id === id);
      // const currentStep = profiles[index].step;
      switch (data.step) {
         case 'NEW':
            await handleRejectCv(id);
            break;
         case 'TEST':
            await handleRejectAfterTest(id);
            break;
         case 'INTERVIEW':
            await handleRejectAfterTest(id);
            break;
         default:
            message.error('Something went wrong');
            break;
      }
      setData({
         ...data,
         status: 'REJECT',
      });

      // setProfiles((pre) => {
      //    // pre[index].status = 'REJECT';
      //    return [...pre];
      // });
      await profileApi.editStep({
         id: id,
         status: 'REJECT',
         step: data.step,
      });
      // return openNotificationWithIcon('success');
   };

   //Handle modal
   const modalAccept = () => {
      setIsModalVisible(true);
   };

   return (
      <Spin spinning={loading}>
         <div className='profile-detail-container'>
            <Space
               direction='vertical'
               size={20}
               style={{
                  display: 'flex',
               }}
            >
               <Row
                  gutter={[30, 16]}
                  style={{
                     background: '#fff',
                     padding: '20px 10px',
                     borderRadius: '6px',
                  }}
               >
                  <Col xs={24} sm={24} md={6}>
                     <Image
                        preview={false}
                        className='profile-detail__left-image'
                        src={data.image_url}
                        style={{ borderRadius: '6px' }}
                     />
                  </Col>
                  <Col xs={24} sm={24} md={18}>
                     <Space
                        direction='vertical'
                        size={0}
                        style={{ display: 'flex' }}
                     >
                        <Title
                           level={3}
                           style={{
                              backgroundColor: '#4670a2',
                              padding: '10px 0 10px 20px',
                              borderRadius: '6px',
                              color: '#fff',
                           }}
                        >
                           {data.first_name
                              ? `${data.last_name} ${data.first_name}`
                              : 'Candidate Name'}
                        </Title>
                        <Row gutter={[20, 20]}>
                           <Col xs={24} sm={24} md={24} lg={16}>
                              <ProfileDetail data={data} />
                           </Col>
                           <Col xs={24} sm={24} md={24} lg={8}>
                              <Space
                                 direction='vertical'
                                 style={{ display: 'flex' }}
                              >
                                 <Title
                                    level={5}
                                    style={{
                                       padding: '10px 5px',
                                       display: 'flex',
                                       borderBottom: '1px solid #ccc',
                                    }}
                                 >
                                    <Space size='small'>
                                       <SettingOutlined />
                                       Action
                                    </Space>
                                 </Title>
                                 <div
                                    style={{
                                       display: 'flex',
                                       alignItems: 'center',
                                    }}
                                    className='action__dropdown'
                                 >
                                    <Text
                                       style={{
                                          width: '55px',
                                          display: 'inline-block',
                                          marginRight: '10px',
                                       }}
                                    >
                                       STEP:
                                    </Text>
                                    <Select
                                       value={data.step}
                                       disabled={
                                          data.status === 'REJECT'
                                             ? true
                                             : false
                                       }
                                       onChange={(value) =>
                                          editProfile(data.id, value)
                                       }
                                    >
                                       {step.length > 0 &&
                                          step.map((item) => (
                                             <Option
                                                key={item.key}
                                                value={item.value}
                                             >
                                                {item.value}
                                             </Option>
                                          ))}
                                    </Select>
                                 </div>
                                 <div
                                    size='small'
                                    style={{ display: 'flex', width: '100%' }}
                                 >
                                    <Text
                                       style={{
                                          width: '55px',
                                          display: 'block',
                                          marginRight: ' 10px',
                                       }}
                                    >
                                       STATUS:
                                    </Text>
                                    {data.status === 'REJECT' ? (
                                       <Text style={{ color: 'red' }}>
                                          {data.status}
                                       </Text>
                                    ) : (
                                       <Text>{data.status}</Text>
                                    )}
                                 </div>
                                 <Space
                                    size='small'
                                    style={{
                                       display: 'flex',
                                       justifyContent: 'flex-end',
                                       marginTop: '15px',
                                    }}
                                 >
                                    <Button
                                       disabled={
                                          data.step === 'EMPLOYEE' ||
                                          data.status === 'REJECT'
                                             ? true
                                             : false
                                       }
                                       type='primary'
                                       style={{ marginRight: '10px' }}
                                       onClick={() =>
                                          handleNextStep(data.id, data.step)
                                       }
                                    >
                                       Accept
                                    </Button>
                                    <Button
                                       disabled={
                                          data.status === 'REJECT' ||
                                          data.step === 'EMPLOYEE'
                                             ? true
                                             : false
                                       }
                                       type='primary'
                                       onClick={() => handleReject(data.id)}
                                       ghost
                                    >
                                       Reject
                                    </Button>
                                 </Space>
                              </Space>
                           </Col>
                        </Row>
                     </Space>
                  </Col>
               </Row>
               <div className='profile-detail__wrapper'>
                  {Object.keys(data).length > 0 && (
                     <iframe
                        src={data.cv_url}
                        frameBorder='0'
                        width='100%'
                        height='800px'
                        allowFullScreen={true}
                        title='Candidate CV'
                     ></iframe>
                  )}
               </div>
            </Space>
         </div>
         <Modal
            title='Time'
            visible={isModalVisible}
            onOk={() => {
               setIsModalVisible(false);
               handleAcceptCv();
            }}
         >
            {/* <DatePicker
               showTime
               onChange={(value) => {
                  setInterViewTime(value);
               }}
            /> */}
            <RangePicker
               showTime={{ format: 'HH:mm' }}
               format='YYYY-MM-DD HH:mm'
               onChange={(value) => {
                  setAcceptTime(value);
               }}
               // onOk={onOk}
            />
         </Modal>
      </Spin>
   );
}

export default ProfileDetailPage;
