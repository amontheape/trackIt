import axios from 'axios';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../contexts/userContext';
import { HabitsContext } from '../contexts/habitsContext';
import Habit from '../components/Habit';
import WeekInput from '../components/WeekInput';
import { DefaultContainer, Title, HabitWrapper, Form, Input, SubmitButton, Warning, HabitsButton } from '../assets/css/style';

function HabitsPage() {
  const { user:{token} } = useContext(UserContext);
  const { habits, selectedDays, setSelectedDays, isHabitsLoading } = useContext(HabitsContext);
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
    <DefaultContainer>
      <Title>
        <p>Meus Hábitos</p>
        <button onClick={()=>{
            setIsCreating(true);
            !isCancelled && setSelectedDays([]);
          }
        }><ion-icon name="add"></ion-icon></button>
      </Title>

      { isCreating && 
        <HabitWrapper>
          <Form onSubmit={handleSubmit(handleCreate)}>
            <Input type='text' 
              {...register('habit', {required: 'Este campo é obrigatório'})} 
              placeholder='nome do hábito' 
              onChange={(event) => setHabitCache(event.target.value)}
              value={habitCache}
            />
            <WeekInput />
            <div className="wrapper">
              <HabitsButton onClick={() => {
                setIsCreating(false);
                setIsCancelled(true);
              }}>Cancelar</HabitsButton>
              <HabitsButton type='submit' name='save'>Salvar</HabitsButton>
            </div>
          </Form>
        </HabitWrapper>
      }
      
      { 
        !isHabitsLoading && ( habits?.map((habit) => (
            <Habit {...habit} />
         )))
      }

      { (!isHabitsLoading && habits.length === 0) 
        && <Warning>Você não tem nenhum hábito cadastrado ainda.
          Adicione um hábito para começar a trackear!</Warning>
      }

      { isHabitsLoading && <p>Carregando...</p> }
    </DefaultContainer>
  );
}

export default HabitsPage;
