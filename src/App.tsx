import React from 'react';
import Router from 'navigation';
import { Provider as ReduxProvider } from 'react-redux';

import store from 'store';

function App() {
  return (
    <ReduxProvider store={store}>
      <Router />
    </ReduxProvider>
  );
}

export default App;
