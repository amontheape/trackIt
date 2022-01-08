import { useContext, useState } from 'react';
import { HabitsContext } from '../contexts/habitsContext';
import axios from 'axios';
import styled from 'styled-components';
import Habit from '../components/Habit';
import { useForm } from 'react-hook-form';
import WeekInput from '../components/WeekInput';
import { UserContext } from '../contexts/userContext';

function HabitsPage() {
  const { user:{token} } = useContext(UserContext);
  const { habits, selectedDays, setSelectedDays } = useContext(HabitsContext);
  const [ isCreating, setIsCreating ] = useState(false);
  const { register, handleSubmit } = useForm();
  const [ habitCache, setHabitCache ] = useState('');
  const [ isCancelled, setIsCancelled] = useState(false);

  function handleCreate({habit}){
    const createRequest = axios.post(
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
       {
         name: habit,
         days: selectedDays
       },
       {
         headers: {
           Authorization: `Bearer ${token}`
         }
       });

    createRequest.then((response)=> {
      console.log(response);
      setIsCreating(false);
      setIsCancelled(false);
    }, (error)=> console.log(error));
  }

  return(
    <>
      <Title>
        <p>Meus Hábitos</p>
        <button onClick={()=>{
            setIsCreating(true);
            !isCancelled && setSelectedDays([]);
          }
        }>+</button>
      </Title>

      { isCreating && 
        <form onSubmit={handleSubmit(handleCreate)}>
          <input type='text' 
            {...register('habit', {required: 'Este campo é obrigatório'})} 
            placeholder='nome do hábito' 
            onChange={(event) => setHabitCache(event.target.value)}
            value={habitCache}
          />
          <WeekInput />
          <div className="wrapper">
            <button onClick={() => {
              setIsCreating(false);
              setIsCancelled(true);
            }}>Cancelar</button>
            <button type='submit'>Salvar</button>
          </div>
        </form>
      }
      
      { habits?.map((habit) => (
        <Habit {...habit}/>
      ))
      }

      { habits.length === 0 
      && <p>Você não tem nenhum hábito cadastrado ainda.
         Adicione um hábito para começar a trackear!</p> }
    </>
  );
}

export default HabitsPage;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 40px;
`