import WeekInput from "./WeekInput";
import { HabitWrapper, Trash } from '../assets/css/style';

function Habit({id, name, days}){
  return(
    <HabitWrapper key={id}>
      <p>{name}</p>
      <WeekInput days={days}/>
      <Trash><ion-icon name="trash-outline"></ion-icon></Trash>
    </HabitWrapper>
  )
}

export default Habit;