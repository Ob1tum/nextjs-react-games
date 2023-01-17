import {useSelector} from 'react-redux'

export const CountMine = () => {
   const state = useSelector(state => state.saperSlice)
   return (
      <div>{state.countMine}</div>
   )
}