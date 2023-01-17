import React, {useEffect} from 'react'
import {Provider} from 'react-redux'
import {store} from '../../../../store/index'
import GamePanel from '../saper/components/GamePanel'
import GameField from '../saper/components/GameField'
import {setField, countBombState} from './store/saperSlice'
import { useDispatch } from 'react-redux'
import {createGameFields} from '../saper/helpers/renderGameFild'

export default function Saper() {
   const dispatch = useDispatch()
   useEffect(()=> {
      dispatch(setField(createGameFields()[0]))
      dispatch(countBombState(createGameFields()[1]))
   },[])

   return (
      <Provider store={store}>
         <div className="gameWrapper">
            <GamePanel />
            <GameField />
         </div>
      </Provider>
      
   )
};