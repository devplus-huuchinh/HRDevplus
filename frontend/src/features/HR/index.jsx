import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import ViewCampaign from '@iso/features/HR/pages/ViewCampaign';
import CreateCampaign from '@iso/features/HR/pages/CreateCampaign';
import EditCampaignPage from './pages/EditCampaignPage';

function Campaign(props) {
   const match = useRouteMatch();

   return (
      <Switch>
         <Route exact path={`${match.url}`} component={ViewCampaign} />
         <Route path={`${match.url}/create`} component={CreateCampaign} />
         <Route path={`${match.url}/edit/:id`} component={EditCampaignPage} />
      </Switch>
   );
}

export default Campaign;
