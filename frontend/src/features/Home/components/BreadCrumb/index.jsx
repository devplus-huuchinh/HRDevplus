import { Breadcrumb } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import './BreadCrumb.scss';

function BreadCrumbs(props) {
   const { breadcrumbText } = props;
   const DynamicCampaignBreadcrumb = () => <span>{breadcrumbText}</span>;

   const routes = [
      {
         path: '/campaign/:campaignId',
         breadcrumb: DynamicCampaignBreadcrumb,
      },
   ];

   const breadcrumbs = useBreadcrumbs(routes);

   return (
      <>
         {/* <Breadcrumb>
            {breadcrumbs.map(({ breadcrumb, match }) => (
               <Breadcrumb.Item key={breadcrumb}>
                  <Link to={match.path}>{breadcrumb}</Link>
               </Breadcrumb.Item>
            ))}
         </Breadcrumb> */}
      </>
   );
}

export default BreadCrumbs;
