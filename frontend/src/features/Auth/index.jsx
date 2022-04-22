import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import LoginPage from './pages/LoginPage';

function Search(props) {
   const match = useRouteMatch();
   return (
      <Switch>
         <Route path={`${match.url}/login`} component={LoginPage} />
      </Switch>
   );
}

export default Search;
