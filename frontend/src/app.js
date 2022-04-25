import GlobalStyles from '@iso/assets/styles/globalStyle';
import React from 'react';
import { Provider } from 'react-redux';
import AppProvider from './AppProvider';
import Boot from './redux/boot';
import { store } from './redux/store';
import Routes from './router';

const App = () => {
   return (
      <Provider store={store}>
         <AppProvider>
            <>
               <GlobalStyles />
               <Routes />
            </>
         </AppProvider>
      </Provider>
   );
};
Boot()
   .then(() => App())
   .catch((error) => console.error(error));

export default App;
