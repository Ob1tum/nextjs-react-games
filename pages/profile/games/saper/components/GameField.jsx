import {useDispatch,useSelector} from 'react-redux'
import {editGameStatus,
        editClass, 
        editTextContent, 
        editPlusBombState,
        editTimer,
        editMinusBombState} from '../store/saperSlice'

export default function GameField () {
   const dispatch = useDispatch()
   const state = useSelector((state) => state.saperSlice)
   
   const clickCell = (item, e) => {
      if(!state.startTimer) dispatch(editTimer(true))
      if(!state.gameStatus) return
      if(item.isBomb) {
         dispatch(editClass({class: 'cell isClickBomb', id: item.id}))
         dispatch(editGameStatus(false))
         dispatch(editTimer(false))
      } else {
         if(e.target.classList.length === 1){
            dispatch(editClass({class: 'cell isClicknotBomb', id: item.id}))
            dispatch(editTextContent({text: item.countBomb, id: item.id}))
         }
      }
   }

   const clickRightCell = (e,item) => {
      e.preventDefault()
      if(!state.gameStatus) return
      if(item.class === 'cell') {
         dispatch(editClass({class: 'cell isClickRightMouse', id: item.id}))
         dispatch(editMinusBombState())
      }
      else if(item.class === 'cell isClickRightMouse') {
         dispatch(editClass({class: 'cell isRightClickTwoCount', id: item.id}))
         dispatch(editPlusBombState())
      }
      else if(item.class === 'cell isRightClickTwoCount'){
         dispatch(editClass({class: 'cell', id: item.id}))
      }
   }
   return (
      <div className="cells">
         {
            state.fields.map((item) => {
               return <span  
                           onContextMenu = {(e) => clickRightCell(e, item)}
                           onClick={(e)=>clickCell(item,e)}
                           key={item.id} 
                           className={item.class}
                        >
                           {item.textContent}
                      </span>
            })
         }
      </div>
      
   )
}