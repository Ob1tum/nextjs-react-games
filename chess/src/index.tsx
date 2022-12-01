// import { Provider } from 'react-redux';

import React from 'react';
import ReactDOM from 'react-dom/client';

// eslint-disable-next-line import/order
import Chess from './components/chess/Chess';

import './styles/globals.scss';

// import { store } from './store/DataSlice';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Chess />
    {/* </Provider> */}
  </React.StrictMode>,
);
