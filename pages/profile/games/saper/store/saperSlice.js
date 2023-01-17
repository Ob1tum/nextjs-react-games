import { createSlice } from "@reduxjs/toolkit";
import {createGameFields} from '../helpers/renderGameFild'

export const saperReducer = createSlice({
  name: "saper",
  initialState: {
    fields: [],
    countMine: 0,
    gameStatus: true,
    clickButton: false,
    class: '',
    startTimer: false,
    timer: 0
  },
  reducers: {
    setField: (state, action) => {
      state.fields = action.payload
    },
    countBombState: (state, action) => {
      state.countMine = action.payload
    },
    editMinusBombState: (state) => {
      if(state.countMine === 0) return
      state.countMine = state.countMine - 1
    },
    editPlusBombState: (state) => {
      state.countMine = state.countMine + 1
    },
    editGameStatus: (state, action) => {
      state.gameStatus = action.payload
    },
    clickButton: (state) => {
      state.fields = createGameFields()[0]
      state.countMine = createGameFields()[1]
    },
    editClass: (state,action) => {
      const el = state.fields.find(item => item.id === action.payload.id)
      el.class = action.payload.class
    },
    editTextContent: (state, action) => {
      const el = state.fields.find(item => item.id === action.payload.id)
      el.textContent = action.payload.text
    },
    editTimer: (state, action) => {
      state.startTimer = action.payload
    },
    editTimerSecond: (state, action) => {
      state.timer = action.payload
    }
  },
});

export const {
  countBombState,
  setField,
  editClass,
  editTextContent,
  editGameStatus,
  editMinusBombState,
  editPlusBombState,
  clickButton,
  editTimer,
  editTimerSecond
} = saperReducer.actions;

export default saperReducer.reducer;