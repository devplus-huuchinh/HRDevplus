import { Spin, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import searchApi from '../../../../api/searchApi';
import useQuery from '../../../../library/hooks/useQuery';
import CandidateSearchBar from '../../../Home/components/CandidateSearchBar';
import CandidateSearchResult from '../../components/CandidateSearchResult';
import CandidateSearchToolbar from '../../components/CandidateSearchToolbar';
import './CandidateSearchPage.scss';

const { Title } = Typography;

const CandidateSearchPage = (props) => {
   const history = useHistory();
   let query = useQuery();
   let keyword = query.get('keyword');

   const [campaignSearchResult, setCampaignSearchResult] = useState([]);
   const [isSpin, setIsSpin] = useState(true);
   const [campaignFilter, setCampaignFilter] = useState({
      technique: 0,
      position: 0,
   });

   useEffect(() => {
      const searchCampaign = async () => {
         resetFilterState();
         const response = await searchApi.searchForCandidate({
            name: keyword,
            campaign_technique: campaignFilter.technique,
            position_campaign: campaignFilter.position,
            is_active: 1,
         });
         setIsSpin(false);
         setCampaignSearchResult(response);
      };
      searchCampaign();
   }, [keyword, campaignFilter]);

   const handleSubmitCandidateSearch = (keyword) => {
      resetFilterState();
      history.push({
         pathname: `/search/candidate`,
         search: `?keyword=${keyword}`,
      });
   };

   const handleChangeCampaignFilter = (key, value) => {
      setCampaignFilter({ ...campaignFilter, [key]: value });
   };

   const resetFilterState = () => {
      setIsSpin(true);
      setCampaignSearchResult((prev) => {
         prev.length = 0;
         return prev;
      });
   };

   return (
      <>
         <div style={{ marginBottom: 20 }}>
            <CandidateSearchBar
               handleSubmitCandidateSearch={handleSubmitCandidateSearch}
               defaultValue={keyword}
            />
         </div>
         <div className='candidate-search-page'>
            <div className='search--filter'>
               <Title level={4} className='filter--title'>
                  Filter tool
               </Title>
               <CandidateSearchToolbar
                  handleChangeCampaignFilter={handleChangeCampaignFilter}
                  campaignFilter={campaignFilter}
               />
            </div>
            <div className='search--result'>
               <Title level={5} className='search--item'>
                  Result for {keyword ? keyword : 'all'}
               </Title>
               <Spin spinning={isSpin}>
                  <div className='search--item'>
                     <CandidateSearchResult
                        campaignSearchResult={campaignSearchResult}
                        isSpin={isSpin}
                     />
                  </div>
               </Spin>
            </div>
         </div>
      </>
   );
};

export default CandidateSearchPage;
