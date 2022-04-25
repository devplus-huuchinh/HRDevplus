import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import CheckYourEmailPage from './pages/CheckYourEmailPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import LoginPage from './pages/LoginPage';
import ResetPasswordPage from './pages/ResetPasswordPage';

function Search(props) {
   const match = useRouteMatch();

   return (
      <Switch>
         <Route
            path={`${match.url}/forgot-password/success/:email`}
            component={CheckYourEmailPage}
         />
         <Route
            path={`${match.url}/forgot-password`}
            component={ForgotPasswordPage}
         />
         <Route
            path={`${match.url}/reset-password`}
            component={ResetPasswordPage}
         />
         <Route path={`${match.url}/login`} component={LoginPage} />
      </Switch>
   );
}

export default Search;
