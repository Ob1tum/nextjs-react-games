import { configureStore } from '@reduxjs/toolkit';

import hangmanReducer from '../hangman/store/HangmanSlice';
import checkersReducer from '../checkers/store/checkersReducer';
import tetrisSlice from '../tetris2/store/tetrisSlice';
import DataSlice from '../chess/dataSlice/DataSlice';
import { storeSolitaire } from '../solitaire/store/store';
import memorySlice from '../memoryCards/store/memorySlice';

import user from './userSlice';

export const store = configureStore({
  reducer: {
    user,
    hangman: hangmanReducer,
    checkers: checkersReducer,
    tetris: tetrisSlice,
    rootSlice: DataSlice,
    solitaire: storeSolitaire,
    memoryCards: memorySlice,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
