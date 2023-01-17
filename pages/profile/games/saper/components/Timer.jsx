import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { editTimerSecond } from '../store/saperSlice'

export const Timer = () => {
   let [timer, setTimer] = useState(null)
   const [timeSeconds, setTimeSeconds] = useState(0)
   const dispatch = useDispatch()
   const isTimer = useSelector((state) => state.saperSlice)
   

   useEffect(()=>{
      if(isTimer.startTimer && isTimer.gameStatus) {
         setTimer(setInterval(()=>{
            setTimeSeconds(timeSeconds++)
            dispatch(editTimerSecond(timeSeconds))
         },1000))
      }
      else {
         setTimeSeconds(0)
         clearInterval(timer)
      }
   }, [isTimer.startTimer])
   
   
      
   return (
      <div>{isTimer.timer}</div>
   )
}