import React, { useEffect, useState } from 'react';
import './DashboardPage.scss';
import Breadcrumb from '../../../Home/components/BreadCrumb';
import StatisticCard from '../../components/StatisticCard';
import styled from 'styled-components';
import { ProfileOutlined, UserOutlined, BellOutlined } from '@ant-design/icons';
import CampaignChart from '../../components/CampaignChart';
import campaignApi from '../../../../api/campaignApi';
import moment from 'moment';
import { Spin } from 'antd';

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

function DashboardPage(props) {
   const [campaignStatistic, setCampaignStatistic] = useState([]);
   const [campaignYear, setCampaignYear] = useState(moment());
   const [campaignSpin, setCampaignSpin] = useState(false);

   useEffect(() => {
      const getStatisticIbDb = async () => {
         setCampaignSpin(true);
         const response = await campaignApi.campaignStatistic({
            year: campaignYear.format('YYYY'),
         });
         setCampaignSpin(false);
         setCampaignStatistic(response);
      };
      getStatisticIbDb();
   }, [campaignYear]);

   const handleChangeCampaignYear = (value) => {
      setCampaignYear(value);
   };

   return (
      <div className='dashboard-page'>
         <Breadcrumb />
         <StatisticCardWrapper>
            <StatisticCard
               icon={<ProfileOutlined />}
               iconBackground='#665CA7'
               contentBackground='#7266BA'
               number={10}
               title='Profile'
            />
            <StatisticCard
               icon={<UserOutlined />}
               iconBackground='#3B94DD'
               contentBackground='#42A5F6'
               number={5}
               title='Employee'
            />
            <StatisticCard
               icon={<BellOutlined />}
               iconBackground='#71BD1D'
               contentBackground='#7ED320'
               number={7}
               title='Campaign'
            />
         </StatisticCardWrapper>
         <Spin spinning={campaignSpin}>
            <CampaignChart
               campaignYear={campaignYear}
               campaignStatistic={campaignStatistic}
               handleChangeCampaignYear={handleChangeCampaignYear}
            />
         </Spin>
      </div>
   );
}

export default DashboardPage;
