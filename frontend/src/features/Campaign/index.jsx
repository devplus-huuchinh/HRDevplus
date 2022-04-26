import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import CampaignDetailPage from './pages/CampaignDetailPage';

const Campaign = () => {
   const match = useRouteMatch();

   return (
      <Switch>
         <Route
            path={`${match.url}/:campaignId`}
            component={CampaignDetailPage}
         />
      </Switch>
   );
};

export default Campaign;
