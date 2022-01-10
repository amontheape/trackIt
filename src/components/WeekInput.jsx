import { useContext } from "react"
import { HabitsContext } from "../contexts/habitsContext";
import { WeekWrapper, DayInput } from '../assets/css/style';

function WeekInput({days=null}){
  const {selectedDays, setSelectedDays} = useContext(HabitsContext);

  function handleClick(value){
    if(selectedDays.includes(value)){
      return setSelectedDays(selectedDays.filter((day) => day !== value));
    }

    setSelectedDays([...selectedDays, value]);
  }

  return(
    <WeekWrapper>
      <DayInput type='button' value='D' onClick={()=> handleClick(0)} key='0' selected={selectedDays.includes(0)}/>
      <DayInput type='button' value='S' onClick={()=> handleClick(1)} key='1' selected={selectedDays.includes(1)}/>
      <DayInput type='button' value='T' onClick={()=> handleClick(2)} key='2' selected={selectedDays.includes(2)}/>
      <DayInput type='button' value='Q' onClick={()=> handleClick(3)} key='3' selected={selectedDays.includes(3)}/>
      <DayInput type='button' value='Q' onClick={()=> handleClick(4)} key='4' selected={selectedDays.includes(4)}/>
      <DayInput type='button' value='S' onClick={()=> handleClick(5)} key='5' selected={selectedDays.includes(5)}/>
      <DayInput type='button' value='S' onClick={()=> handleClick(6)} key='6' selected={selectedDays.includes(6)}/>
    </WeekWrapper>
  )
}

export default WeekInput;
