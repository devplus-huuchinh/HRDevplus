import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import ProfilesPage from '@iso/features/Profile/pages/ProfilesPage';
import ProfileDetailPage from '@iso/features/Profile/pages/ProfileDetailPage';

function Profile(props) {
   const match = useRouteMatch();
   return (
      <Switch>
         <Route
            path={`${match.url}/detail/:id`}
            component={ProfileDetailPage}
         />
         <Route path={`${match.url}/:id`} component={ProfilesPage} />
      </Switch>
   );
}

export default Profile;
