import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import SearchPage from '@iso/features/Search/pages/SearchPage';

function Search(props) {
   const match = useRouteMatch();
   return (
      <Switch>
         <Route path={`${match.url}/test`} component={SearchPage} />
      </Switch>
   );
}

export default Search;
