import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import MainLayout from '../../containers/MainLayout';
import CandidateSearchPage from './pages/CandidateSearchPage';

const Search = () => {
   const math = useRouteMatch();

   return (
      <MainLayout>
         <Switch>
            <Route
               path={`${math.url}/candidate`}
               component={CandidateSearchPage}
            />
         </Switch>
      </MainLayout>
   );
};

export default Search;
