import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import HomePage from '@iso/features/Home/pages/HomePage';
// import CampaignDetailPage from '@iso/features/Home/pages/CampaignDetailPage';

function Home(props) {
   const match = useRouteMatch();
   return (
      <Switch>
         <Route exact path={`${match.url}`} component={HomePage} />
      </Switch>
   );
}

export default Home;
