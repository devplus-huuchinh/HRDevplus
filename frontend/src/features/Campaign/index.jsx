import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import ApplyCampaign from './pages/ApplyCampaign';
import CampaignDetailPage from './pages/CampaignDetailPage';
import ThankYouPage from './pages/ThankYouPage';

const Campaign = () => {
   const match = useRouteMatch();

   return (
      <Switch>
         <Route
            exact
            path={`${match.url}/:campaignId/apply/thank-you`}
            component={ThankYouPage}
         />
         <Route
            path={`${match.url}/:campaignId/apply`}
            component={ApplyCampaign}
         />
         <Route
            path={`${match.url}/:campaignId`}
            component={CampaignDetailPage}
         />
      </Switch>
   );
};

export default Campaign;
