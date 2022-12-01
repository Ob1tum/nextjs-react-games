import { createSlice } from '@reduxjs/toolkit';

import { bids, players } from '../components/gameSettings/PlayersData';
import {
  InputSelectInterface,
  ListPlayersInterface,
  PlayersInterface,
} from '../interfaces/Interfaces';

interface DataInterface {
  gameTime: string | null;
  listPlayers: ListPlayersInterface[];
  modalWindow: boolean;
  isOnline: boolean;
  bidsData: InputSelectInterface[];
  currentPlayer: PlayersInterface | null;
  rival: PlayersInterface | null;
}

const initialState: DataInterface = {
  bidsData: bids,
  gameTime: null,
  listPlayers: players,
  isOnline: false,
  modalWindow: true,
  currentPlayer: null,
  rival: null,
};
export const rootSlice = createSlice({
  name: 'dataSlice',
  initialState,
  reducers: {
    setOnline(state) {
      state.isOnline = true;
    },
    setOffline(state) {
      state.isOnline = false;
    },
    openModal(state) {
      state.modalWindow = true;
    },
    closeModal(state) {
      state.modalWindow = false;
    },
    setDataForCurrentPlayer(state, action) {
      state.currentPlayer = action.payload;
    },
    setDataForRival(state, action) {
      state.rival = action.payload;
    },
  },
});

export default rootSlice.reducer;
export const {
  setOnline,
  setOffline,
  openModal,
  closeModal,
  setDataForCurrentPlayer,
  setDataForRival,
} = rootSlice.actions;
