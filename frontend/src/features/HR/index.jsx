import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import ViewCampaign from '@iso/features/HR/pages/ViewCampaign';
import CreateCampaign from '@iso/features/HR/pages/CreateCampaign';
function Campaign(props) {
   const match = useRouteMatch();
   // console.log(match);
   return (
      <Switch>
         <Route exact path={`${match.url}`} component={ViewCampaign} />
         <Route path={`${match.url}/create`} component={CreateCampaign} />
      </Switch>
   );
}

export default Campaign;
