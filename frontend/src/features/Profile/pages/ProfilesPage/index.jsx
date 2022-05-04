import { DatePicker, message, Modal, Pagination, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import emailApi from '../../../../api/emailApi';
import positionApi from '../../../../api/positionApi';
import profileApi from '../../../../api/profileApi';
import searchApi from '../../../../api/searchApi';
import BreadCrumbs from '../../../Home/components/BreadCrumb';
import SearchProfiles from '../../components/SearchProfile';
import TableProfile from '../../components/TableProfile';
import './profilesPage.scss';

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
   const [pagination, setPagination] = useState({});
   const [page, setPage] = useState(1);
   const [position, setPosition] = useState([]);
   const [isModalVisible, setIsModalVisible] = useState(false);
   const [confirmModal, setConfirmModal] = useState(false);
   const [acceptTime, setAcceptTime] = useState([]);
   const [targetId, setTargetId] = useState();
   const [confirmModalTarget, setConfirmModalTarget] = useState({});
   const [searchFormData, setSearchFormData] = useState({
      first_name: '',
      email: '',
      phone_numb: '',
      status: [],
      campaign_id: id,
   });

   //EFFECT
   useEffect(() => {
      const getAllProfileInDb = async () => {
         setTableLoading(true);
         const ProfilesRes = await profileApi.getAllProfile({
            campaign_id: id,
         });
         const searchResponse = await searchApi.searchProfile({
            ...searchFormData,
            campaign_id: id,
            page,
         });
         const dropProfile = await profileApi.dropdownData();
         const position = await positionApi.getAll();
         setPosition(position);
         setTableLoading(false);
         setProfiles(searchResponse.data);
         setStep(dropProfile);
         setCampaign(ProfilesRes);
         setPagination(searchResponse);
      };
      getAllProfileInDb();
   }, [id, searchFormData, page]);

   const { RangePicker } = DatePicker;
   //NOTIFICATION
   // const openNotificationWithIcon = (type) => {
   //    notification[type]({
   //       message: 'Update successful',
   //       duration: 2,
   //    });
   // };

   const handleChangeSearchFormData = (formData) => {
      setSearchFormData(formData);
   };

   const handleChangePage = (value) => {
      setPage(value);
   };

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
            modalAccept(id);
            break;
         default:
            message.error('Something went wrong');
            break;
      }
      const index = profiles.findIndex((item) => item.id === id);
      setProfiles((pre) => {
         pre[index].status = status;
         pre[index].step = step;
         return [...pre];
      });
      await profileApi.editStep({
         id: id,
         step: step,
         status: status,
      });
      // return openNotificationWithIcon('success');
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
            modalAccept(id);
            break;
         case 'EMPLOYEE':
            stepUpdated = 'NULL';
            statusUpdated = 'APPROVE';
            break;
         default:
            message.error('Something went wrong');
            break;
      }
      const index = profiles.findIndex((item) => item.id === id);
      setProfiles((pre) => {
         pre[index].status = statusUpdated;
         pre[index].step = stepUpdated;
         return [...pre];
      });
      await profileApi.editStep({
         id: id,
         status: statusUpdated,
         step: stepUpdated,
      });
      // return openNotificationWithIcon('success');
   };

   const handleReject = async (id) => {
      const index = profiles.findIndex((item) => item.id === id);
      const currentStep = profiles[index].step;
      switch (currentStep) {
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
      setProfiles((pre) => {
         pre[index].status = 'REJECT';
         return [...pre];
      });
      await profileApi.editStep({
         id: id,
         status: 'REJECT',
         step: profiles[index].step,
      });
      // return openNotificationWithIcon('success');
   };

   const handleInviteTest = async (id) => {
      const candidate = profiles.find((item) => item.id === id);
      await emailApi.inviteTest({
         candidateName: `${candidate.last_name} ${candidate.first_name}`,
         position: position.find((item) => item.id === candidate.position_id)
            .name,
         to: candidate.email,
      });
      return message.success('Mail has sent successfully');
   };

   const handleInviteInterview = async (id) => {
      const candidate = profiles.find((item) => item.id === id);
      await emailApi.inviteInterview({
         candidateName: `${candidate.last_name} ${candidate.first_name}`,
         position: position.find((item) => item.id === candidate.position_id)
            .name,
         to: candidate.email,
      });
      return message.success('Mail has sent successfully');
   };

   const handleAcceptCv = async (id) => {
      const candidate = profiles.find((item) => item.id === id);
      await emailApi.acceptCv({
         candidateName: `${candidate.last_name} ${candidate.first_name}`,
         to: candidate.email,
         start_date: acceptTime[0].format('YYYY-MM-DD HH:mm'),
         end_date: acceptTime[1].format('YYYY-MM-DD HH:mm'),
         position: position.find((item) => item.id === candidate.position_id)
            .name,
      });
      return message.success('Mail has sent successfully');
   };

   const handleRejectCv = async (id) => {
      const candidate = profiles.find((item) => item.id === id);
      await emailApi.rejectCv({
         candidateName: `${candidate.last_name} ${candidate.first_name}`,
         to: candidate.email,
      });
      return message.success('Reject mail has sent successfully');
   };

   const handleRejectAfterTest = async (id) => {
      const candidate = profiles.find((item) => item.id === id);
      await emailApi.rejectAfterTest({
         candidateName: `${candidate.last_name} ${candidate.first_name}`,
         to: candidate.email,
      });
      return message.success('Reject mail has sent successfully');
   };

   //Handle modal
   const modalAccept = (id) => {
      setTargetId(id);
      setIsModalVisible(true);
   };

   const ActiveConfirmModal = (id, value, first_name, last_name) => {
      setConfirmModalTarget({
         id: id,
         value: value,
         name: `${first_name} ${last_name}`,
      });
      setConfirmModal(true);
   };

   const handleCancel = () => {
      setConfirmModal(false);
   };

   const handleOk = () => {
      editProfile(confirmModalTarget.id, confirmModalTarget.value);
      setConfirmModal(false);
   };

   return (
      <div className='profiles-container'>
         <Space
            direction='vertical'
            size={'middle'}
            style={{ display: 'flex' }}
         >
            <BreadCrumbs profileName={campaign.name} />
            <SearchProfiles
               selected={selected}
               handleChangeSearchFormData={handleChangeSearchFormData}
               campaignId={id}
               campaign={campaign}
            />
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
               ActiveConfirmModal={ActiveConfirmModal}
            />
            {Object.keys(pagination).length > 0 && (
               <Pagination
                  current={page}
                  total={pagination?.total}
                  pageSize={pagination?.per_page}
                  onChange={handleChangePage}
               />
            )}
         </Space>
         <Modal
            title='Time'
            visible={isModalVisible}
            onOk={() => {
               setIsModalVisible(false);
               handleAcceptCv(targetId);
            }}
         >
            <RangePicker
               showTime={{ format: 'HH:mm' }}
               format='YYYY-MM-DD HH:mm'
               onChange={(value) => {
                  setAcceptTime(value);
               }}
            />
         </Modal>
         <Modal
            title='Are you sure about this?'
            visible={confirmModal}
            onOk={handleOk}
            onCancel={handleCancel}
         >
            <p>
               Change candidate <b>{confirmModalTarget.name}</b>'s step to{' '}
               <b>{confirmModalTarget.value}</b>
            </p>
         </Modal>
      </div>
   );
}

export default ProfilesPage;
