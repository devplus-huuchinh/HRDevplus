import { Breadcrumb } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import './BreadCrumb.scss';
import PropTypes from 'prop-types';

BreadCrumbs.propTypes = {
   campaignName: PropTypes.string,
};

BreadCrumbs.defaultProps = {
   campaignName: '',
};

function BreadCrumbs(props) {
   const { campaignName } = props;
   const DynamicCampaignBreadcrumb = () => <span>{campaignName}</span>;

   const routes = [
      {
         path: '/campaign/:campaignId',
         breadcrumb: DynamicCampaignBreadcrumb,
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
