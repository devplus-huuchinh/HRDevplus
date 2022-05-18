import { FilterOutlined } from '@ant-design/icons';
import { Pagination, Spin, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import searchApi from '../../../../api/searchApi';
import CandidateSearchBar from '../../../Home/components/CandidateSearchBar';
import CandidateSearchResult from '../../components/CandidateSearchResult';
import CandidateSearchToolbar from '../../components/CandidateSearchToolbar';
import './CandidateSearchPage.scss';

const { Title } = Typography;

const CandidateSearchPage = (props) => {
   let location = useLocation();

   const [campaignSearchResult, setCampaignSearchResult] = useState([]);
   const [page, setPage] = useState(1);
   const [loading, setLoading] = useState(false);

   const [searchFilter, setSearchFilter] = useState({
      name: location.state?.name || '',
      position_campaign: location.state?.position_campaign || [],
      is_active: location.state?.is_active || [1],
      start_date: location.state?.start_date || '1970-01-01',
      end_date: location.state?.end_date || '2100-01-01',
      campaign_technique: location.state?.campaign_technique || [],
   });

   useEffect(() => {
      const searchCampaignsInDb = async () => {
         try {
            setLoading(true);
            const response = await searchApi.searchForCandidate({
               name: searchFilter.name,
               position_campaign: searchFilter.position_campaign,
               is_active: searchFilter.is_active,
               start_date: searchFilter.start_date,
               end_date: searchFilter.end_date,
               campaign_technique: searchFilter.campaign_technique,
               page,
            });
            setCampaignSearchResult(response);
            setLoading(false);
         } catch (error) {
            console.log(error);
         }
      };
      searchCampaignsInDb();
   }, [searchFilter, page]);

   const handleChangeSearchFilter = (key, value) => {
      setSearchFilter({ ...searchFilter, [key]: value });
   };

   const handleChangeSearchInput = (value) => {
      setSearchFilter((prev) => {
         return {
            ...prev,
            name: value,
         };
      });
   };

   const handleChangePage = (pageNumber) => {
      setPage(pageNumber);
   };

   return (
      <>
         <div style={{ marginBottom: 20 }}>
            <CandidateSearchBar
               handleSubmitCandidateSearch={handleChangeSearchInput}
               defaultValue={searchFilter.name}
            />
         </div>
         <div className='candidate-search-page'>
            <div className='search--filter'>
               <Title level={4} className='filter--title'>
                  <FilterOutlined /> Filter tool
               </Title>
               <CandidateSearchToolbar
                  handleChangeSearchFilter={handleChangeSearchFilter}
               />
            </div>
            <div className='search--result'>
               <Title level={4} className='search--item'>
                  Result for {searchFilter.name ? searchFilter.name : 'all'}
               </Title>
               <div className='search--item'>
                  <Spin spinning={loading}>
                     <CandidateSearchResult
                        campaignSearchResult={campaignSearchResult.data}
                     />
                     {Object.keys(campaignSearchResult).length > 0 && (
                        <div className='search--pagination'>
                           <Pagination
                              current={page}
                              total={campaignSearchResult?.total}
                              pageSize={campaignSearchResult?.per_page}
                              onChange={handleChangePage}
                           />
                        </div>
                     )}
                  </Spin>
               </div>
            </div>
         </div>
      </>
   );
};

export default CandidateSearchPage;
