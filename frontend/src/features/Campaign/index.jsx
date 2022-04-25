import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import ViewCampaign from '@iso/features/Campaign/pages/ViewCampaign';
function Campaign(props) {
   const match = useRouteMatch();
   // console.log(match);
   return (
      <Switch>
         <Route path={`${match.url}`} component={ViewCampaign} />
      </Switch>
   );
}

export default Campaign;
