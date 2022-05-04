import ProfileDetailPage from '@iso/features/Profile/pages/ProfileDetailPage';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';

function Profile(props) {
   const match = useRouteMatch();
   return (
      <Switch>
         <Route
            path={`${match.url}/detail/:id`}
            component={ProfileDetailPage}
         />
         {/* <Route path={`${match.url}/:id`} component={ProfilesPage} /> */}
      </Switch>
   );
}

export default Profile;
