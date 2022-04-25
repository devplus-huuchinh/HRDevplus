import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import CreateCampaign from '@iso/features/CreateCampaign/pages/CreateCampaign';
function Create(props) {
   const match = useRouteMatch();
   // console.log(match);
   return (
      <Switch>
         <Route path={`${match.url}/create`} component={CreateCampaign} />
      </Switch>
   );
}

export default Create;
