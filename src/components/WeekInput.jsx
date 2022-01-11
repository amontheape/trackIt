import { useContext } from "react"
import { HabitsContext } from "../contexts/habitsContext";
import { WeekWrapper, DayInput } from '../assets/css/style';

function WeekInput({days=null}){
  const { selectedDays, setSelectedDays } = useContext(HabitsContext);

  function handleClick(value){
    if(selectedDays.includes(value)){
      return setSelectedDays(selectedDays.filter((day) => day !== value));
    }

    setSelectedDays([...selectedDays, value]);
  }

  function handleSelection(key){
    if(days){
      return days.includes(key);
    }else return selectedDays.includes(key);
  }

  return(
    <WeekWrapper>
      <DayInput type='button' value='D' onClick={()=> handleClick(0)} key='0' selected={handleSelection(0)} disabled={!!days} />
      <DayInput type='button' value='S' onClick={()=> handleClick(1)} key='1' selected={handleSelection(1)} disabled={!!days} />
      <DayInput type='button' value='T' onClick={()=> handleClick(2)} key='2' selected={handleSelection(2)} disabled={!!days} />
      <DayInput type='button' value='Q' onClick={()=> handleClick(3)} key='3' selected={handleSelection(3)} disabled={!!days} />
      <DayInput type='button' value='Q' onClick={()=> handleClick(4)} key='4' selected={handleSelection(4)} disabled={!!days} />
      <DayInput type='button' value='S' onClick={()=> handleClick(5)} key='5' selected={handleSelection(5)} disabled={!!days} />
      <DayInput type='button' value='S' onClick={()=> handleClick(6)} key='6' selected={handleSelection(6)} disabled={!!days} />
    </WeekWrapper>
  )
}

export default WeekInput;
