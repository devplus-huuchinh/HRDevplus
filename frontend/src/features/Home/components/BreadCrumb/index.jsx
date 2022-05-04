import { Breadcrumb } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import './BreadCrumb.scss';
import PropTypes from 'prop-types';

BreadCrumbs.propTypes = {
   campaignName: PropTypes.string,
   profileName: PropTypes.string,
   campaignEdit: PropTypes.string,
};

BreadCrumbs.defaultProps = {
   campaignName: '',
   profileName: '',
   campaignEdit: '',
};

function BreadCrumbs(props) {
   const { campaignName, profileName, campaignEdit } = props;
   const DynamicCampaignBreadcrumb = () => <span>{campaignName}</span>;
   const DynamicProfileBreadcrumb = () => <span>{profileName}</span>;
   const DynamicEditProfileBreadcrumb = () => <span>{campaignEdit}</span>;

   const routes = [
      {
         path: '/campaign/:campaignId',
         breadcrumb: DynamicCampaignBreadcrumb,
      },
      {
         path: '/dashboard/profile/:profileId',
         breadcrumb: DynamicProfileBreadcrumb,
      },
      {
         path: '/dashboard/campaign/edit/:campaignId',
         breadcrumb: DynamicEditProfileBreadcrumb,
      },
   ];

   const breadcrumbs = useBreadcrumbs(routes);

   return (
      <>
         <Breadcrumb>
            {breadcrumbs.map(({ breadcrumb, match }) => (
               <Breadcrumb.Item key={breadcrumb.key}>
                  <Link to={match.url}>{breadcrumb}</Link>
               </Breadcrumb.Item>
            ))}
         </Breadcrumb>
      </>
   );
}

export default BreadCrumbs;
