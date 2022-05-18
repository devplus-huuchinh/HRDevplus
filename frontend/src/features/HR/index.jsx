import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import ViewCampaign from '@iso/features/HR/pages/ViewCampaign';
import CreateCampaign from '@iso/features/HR/pages/CreateCampaign';
import EditCampaignPage from './pages/EditCampaignPage';
import ProfilesPage from '../Profile/pages/ProfilesPage';

function Campaign(props) {
   const match = useRouteMatch();

   return (
      <Switch>
         <Route exact path={`${match.url}`} component={ViewCampaign} />
         <Route path={`${match.url}/edit/:id`} component={EditCampaignPage} />
         <Route path={`${match.url}/:id/profile`} component={ProfilesPage} />
         <Route path={`${match.url}/create`} component={CreateCampaign} />
      </Switch>
   );
}

export default Campaign;
