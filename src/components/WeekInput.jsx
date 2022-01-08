import { useContext } from "react"
import { HabitsContext } from "../contexts/habitsContext";

function WeekInput({days=null}){
  const {selectedDays, setSelectedDays} = useContext(HabitsContext);

  function handleClick(value){
    if(selectedDays.includes(value)){
      return setSelectedDays(selectedDays.filter((day) => day !== value));
    }

    setSelectedDays([...selectedDays, value]);
  }

  return(
    <>
      <input type='button' value='D' onClick={()=> handleClick(0)} key='0' />
      <input type='button' value='S' onClick={()=> handleClick(1)} key='1' />
      <input type='button' value='T' onClick={()=> handleClick(2)} key='2' />
      <input type='button' value='Q' onClick={()=> handleClick(3)} key='3' />
      <input type='button' value='Q' onClick={()=> handleClick(4)} key='4' />
      <input type='button' value='S' onClick={()=> handleClick(5)} key='5' />
      <input type='button' value='S' onClick={()=> handleClick(6)} key='6' />
    </>
  )
}

export default WeekInput;
