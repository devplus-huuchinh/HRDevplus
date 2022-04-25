import Loader from '@iso/components/utility/loader';
import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
   BrowserRouter as Router,
   Redirect,
   Route,
   Switch,
} from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import authActions from './redux/auth/actions';
import { PUBLIC_ROUTE } from './route.constants';
import Home from './features/Home';

const Dashboard = lazy(() => import('./containers/Dashboard/Dashboard'));

const publicRoutes = [
   {
      path: PUBLIC_ROUTE.LANDING,
      exact: true,
      component: lazy(() => import('@iso/containers/Pages/SignIn/SignIn')),
   },
   {
      path: PUBLIC_ROUTE.PAGE_404,
      component: lazy(() => import('@iso/containers/Pages/404/404')),
   },
   {
      path: PUBLIC_ROUTE.PAGE_500,
      component: lazy(() => import('@iso/containers/Pages/500/500')),
   },
   {
      path: PUBLIC_ROUTE.SIGN_IN,
      component: lazy(() => import('@iso/containers/Pages/SignIn/SignIn')),
   },
   {
      path: PUBLIC_ROUTE.SIGN_UP,
      component: lazy(() => import('@iso/containers/Pages/SignUp/SignUp')),
   },
   {
      path: PUBLIC_ROUTE.FORGET_PASSWORD,
      component: lazy(() =>
         import('@iso/containers/Pages/ForgotPassword/ForgotPassword')
      ),
   },
   {
      path: PUBLIC_ROUTE.RESET_PASSWORD,
      component: lazy(() =>
         import('@iso/containers/Pages/ResetPassword/ResetPassword')
      ),
   },
   {
      path: PUBLIC_ROUTE.AUTH0_CALLBACK,
      component: lazy(() =>
         import('@iso/containers/Authentication/Auth0/Auth0Callback')
      ),
   },
   {
      path: PUBLIC_ROUTE.LOGIN,
      component: lazy(() => import('@iso/features/Auth')),
   },
];
function PrivateRoute({ children, ...rest }) {
   const isLoggedIn = useSelector((state) => state.Auth.idToken);

   return (
      <Route
         {...rest}
         render={({ location }) =>
            isLoggedIn ? (
               children
            ) : (
               <Redirect
                  to={{
                     pathname: '/auth/login',
                     state: { from: location },
                  }}
               />
            )
         }
      />
   );
}

export default function Routes() {
   const dispatch = useDispatch();

   useEffect(() => {
      const action = authActions.getUserDataRequest();
      dispatch(action);
   }, [dispatch]);

   return (
      <ErrorBoundary>
         <Suspense fallback={<Loader />}>
            <Router>
               <Switch>
                  <Route path='/home'>
                     <Home />
                  </Route>

                  {publicRoutes.map((route, index) => (
                     <Route key={index} path={route.path} exact={route.exact}>
                        <route.component />
                     </Route>
                  ))}
                  <PrivateRoute exact path='/dashboard'>
                     <Dashboard />
                  </PrivateRoute>
               </Switch>
            </Router>
         </Suspense>
      </ErrorBoundary>
   );
}
