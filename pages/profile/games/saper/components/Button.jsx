import { editGameStatus, editTimer, editTimerSecond, clickButton } from "../store/saperSlice"
import {useDispatch, useSelector } from 'react-redux'

export const Button = () => {
   const dispatch = useDispatch()
   const gameStatus = useSelector((state) => state.saperSlice.gameStatus)
   
   const goNewGame = () => {
      dispatch(editGameStatus(true))
      dispatch(clickButton())
      dispatch(editTimer(false))
      dispatch(editTimerSecond(0))
   }

   return (
      <button
         onClick={goNewGame}
         className={gameStatus ? 'gameStatusTrue' : 'gameStatusFalse'}>
      </button>
   )
}