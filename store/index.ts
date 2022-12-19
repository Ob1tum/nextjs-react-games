// import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

import hangmanReducer from '../hangman/store/HangmanSlice';
import checkersReducer from '../checkers/store/checkersReducer';
import tetrisSlice, { initialState } from '../tetris2/store/tetrisSlice';
import DataSlice from '../chess/dataSlice/DataSlice';

import user from './userSlice';

// const rootReducer = combineReducers({
//   user,
//   hangman: hangmanReducer,
//   checkers: checkersReducer,
//   tetris: tetrisSlice,
//   rootSlice: DataSlice,
// });
// export function setupStore(preloadedState: any) {
//   return configureStore({
//     reducer: rootReducer,
//     preloadedState,
//   });
// }

export const store = configureStore({
  reducer: {
    user,
    hangman: hangmanReducer,
    checkers: checkersReducer,
    tetris: tetrisSlice,
    rootSlice: DataSlice,
  },
  preloadedState: {
    tetris: initialState,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
