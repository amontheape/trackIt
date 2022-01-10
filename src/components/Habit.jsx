import { useContext } from "react";
import WeekInput from "./WeekInput";
import { HabitsContext } from "../contexts/habitsContext";
import { HabitWrapper, Trash } from '../assets/css/style';

function Habit({id, name, days}){
  const { handleDelete } = useContext(HabitsContext);

  return(
    <HabitWrapper key={id}>
      <p>{name}</p>
      <WeekInput days={days}/>
      <Trash onClick={()=> handleDelete(id)}>
        <ion-icon name="trash-outline"></ion-icon>
      </Trash>
    </HabitWrapper>
  )
}

export default Habit;