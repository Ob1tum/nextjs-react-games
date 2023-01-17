import {useSelector} from 'react-redux'
import {Button} from './Button'
import {Timer} from './Timer'
import {CountMine} from './CountMine'

export default function GamePanel () {
   return (
      <>
         <div className="gameHeader">
            <CountMine />
            <Button />
            <Timer />
         </div>
         <hr />
      </>
      
   )
}