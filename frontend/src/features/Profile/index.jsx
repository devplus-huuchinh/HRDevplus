import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import ProfilesPage from '@iso/features/Profile/pages/ProfilesPage';

function Profile(props) {
   const match = useRouteMatch();
   return (
      <Switch>
         <Route path={`${match.url}/:id`} component={ProfilesPage} />
      </Switch>
   );
}

export default Profile;
