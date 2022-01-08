import WeekInput from "./WeekInput";

function Habit({id, name, days}){
  return(
    <div key={id}>
      <p>{name}</p>
      <WeekInput days={days}/>
    </div>
  )
}

export default Habit;