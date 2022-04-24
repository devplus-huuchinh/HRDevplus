import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import ChangePasswordPage from './pages/ChangePasswordPage';

function UserProfile(props) {
   const match = useRouteMatch();
   return (
      <Switch>
         <Route
            path={`${match.url}/change-password`}
            component={ChangePasswordPage}
         />
      </Switch>
   );
}

export default UserProfile;
