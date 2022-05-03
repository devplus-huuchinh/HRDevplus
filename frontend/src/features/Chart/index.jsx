import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import DashboardPage from './pages/DashboardPage';

const Chart = () => {
   const match = useRouteMatch();

   return (
      <Switch>
         <Route exact path={`${match.url}`} component={DashboardPage} />
      </Switch>
   );
};

export default Chart;
