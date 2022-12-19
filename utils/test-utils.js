import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import tetrisSlice, { initialState } from '../tetris2/store/tetrisSlice';

export function renderWithProviders(
  ui,
  {
    preloadedState = initialState,
    store = configureStore({
      reducer: {
        tetris: tetrisSlice,
      },
      preloadedState,
    }),
    ...renderOptions
  },
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
