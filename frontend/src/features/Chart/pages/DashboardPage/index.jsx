import React, { useEffect, useState } from 'react';
import './DashboardPage.scss';
import Breadcrumb from '../../../Home/components/BreadCrumb';
import StatisticCard from '../../components/StatisticCard';
import styled from 'styled-components';
import { ProfileOutlined, UserOutlined, BellOutlined } from '@ant-design/icons';
import DashboardChart from '../../components/DashboardChart';
import campaignApi from '../../../../api/campaignApi';
import moment from 'moment';
import { Spin, Typography } from 'antd';
import profileApi from '../../../../api/profileApi';

DashboardPage.propTypes = {};

const StatisticCardWrapper = styled.div`
   --f-columns: 3;
   --f-gap: 20px;
   display: flex;
   flex-wrap: wrap;
   margin-left: calc(-1 * var(--f-gap));
   margin-bottom: calc(-1 * var(--f-gap));

   > * {
      margin-left: var(--f-gap);
      margin-bottom: var(--f-gap);
      width: calc((100% / var(--f-columns) - var(--f-gap)));
   }
   @media screen and (max-width: 767px) {
      --f-columns: 2;
   }
   @media screen and (max-width: 557px) {
      --f-columns: 1;
   }
`;

const { Title } = Typography;

function DashboardPage(props) {
   const [campaignStatistic, setCampaignStatistic] = useState([]);
   const [campaignYear, setCampaignYear] = useState(moment());
   const [campaignSpin, setCampaignSpin] = useState(false);

   const [profileStatistic, setProfileStatistic] = useState([]);
   const [profileYear, setProfileYear] = useState(moment());
   const [profileSpin, setProfileSpin] = useState(false);

   const [count, setCount] = useState({
      profiles: 0,
      campaigns: 0,
      users: 0,
   });
   const [countSpin, setCountSpin] = useState(true);

   useEffect(() => {
      const getCampaignStatisticInDb = async () => {
         setCampaignSpin(true);
         const response = await campaignApi.campaignStatistic({
            year: campaignYear.format('YYYY'),
         });
         setCampaignSpin(false);
         setCampaignStatistic(response);
      };
      getCampaignStatisticInDb();
   }, [campaignYear]);

   useEffect(() => {
      const getProfileStatisticInDb = async () => {
         try {
            setProfileSpin(true);
            const response = await profileApi.profileStatistics({
               year: profileYear.format('YYYY'),
            });
            setProfileSpin(false);
            setProfileStatistic(response);
         } catch (error) {
            console.log(error);
         }
      };
      getProfileStatisticInDb();
   }, [profileYear]);

   useEffect(() => {
      const countInDb = async () => {
         try {
            const response = await campaignApi.dashboardCount();
            setCountSpin(false);
            setCount(response);
         } catch (error) {
            console.log(error);
         }
      };
      countInDb();
   }, []);

   const handleChangeCampaignYear = (value) => {
      setCampaignYear(value);
   };

   const handleChangeProfileYear = (value) => {
      setProfileYear(value);
   };

   return (
      <div className='dashboard-page'>
         <Breadcrumb />
         <Spin spinning={countSpin}>
            <StatisticCardWrapper>
               <StatisticCard
                  icon={<ProfileOutlined />}
                  iconBackground='#665CA7'
                  contentBackground='#7266BA'
                  number={count.profiles}
                  title='Profile'
               />
               <StatisticCard
                  icon={<UserOutlined />}
                  iconBackground='#3B94DD'
                  contentBackground='#42A5F6'
                  number={count.users}
                  title='Employee'
               />
               <StatisticCard
                  icon={<BellOutlined />}
                  iconBackground='#71BD1D'
                  contentBackground='#7ED320'
                  number={count.campaigns}
                  title='Campaign'
               />
            </StatisticCardWrapper>
         </Spin>

         <StatisticCardWrapper
            style={{ justifyContent: 'space-between', marginTop: 30, gap: 5 }}
         >
            <div className='dashboard--chart'>
               <Title className='chart--title' level={4}>
                  Profile chart by month
               </Title>
               <Spin spinning={campaignSpin} style={{ marginTop: 20 }}>
                  <DashboardChart
                     year={campaignYear}
                     data={campaignStatistic}
                     handleChangeYear={handleChangeCampaignYear}
                     borderColor='#36A2EC'
                     backgroundColor='#9AD0F5'
                     label='Campaign'
                     height={200}
                  />
               </Spin>
            </div>
            <div className='dashboard--chart'>
               <Title className='chart--title' level={4}>
                  Campaign chart by month
               </Title>
               <Spin spinning={profileSpin}>
                  <DashboardChart
                     year={profileYear}
                     data={profileStatistic}
                     handleChangeYear={handleChangeProfileYear}
                     borderColor='#FF6384'
                     backgroundColor='#FFB1C1'
                     label='Profile'
                     height={200}
                  />
               </Spin>
            </div>
         </StatisticCardWrapper>
      </div>
   );
}

export default DashboardPage;
