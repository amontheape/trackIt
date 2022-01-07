import { useContext } from 'react';
import { HabitsContext } from '../contexts/habitsContext';

function HabitsPage() {
  const [ habits ] = useContext(HabitsContext);

  return(
    <>
      <p>Meus Hábitos</p>
      <button>+</button>
      { habits?.map((habit) => (
        <form>
          <input type='text'></input>
        </form> 
      ))
      }
    </>
  );
}

export default HabitsPage;