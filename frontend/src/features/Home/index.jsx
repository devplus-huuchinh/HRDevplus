import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import HomePage from '@iso/features/Home/pages/HomePage';
import CampaignDetailPage from '@iso/features/Home/pages/CampaignDetailPage';

function Home(props) {
   const match = useRouteMatch();
   console.log('🚀 ~ file: index.jsx ~ line 8 ~ Home ~ match', match);
   return (
      <Switch>
         <Route
            path={`${match.url}/:campaignId`}
            component={CampaignDetailPage}
         />
         <Route path={`${match.url}`} component={HomePage} />
      </Switch>
   );
}

export default Home;
