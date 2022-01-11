import axios from 'axios';
import Loader from 'react-loader-spinner';
import { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../contexts/userContext';
import { HabitsContext } from '../contexts/habitsContext';
import Habit from '../components/Habit';
import WeekInput from '../components/WeekInput';
import { DefaultContainer, Title, HabitWrapper, Form, Input, Warning, HabitsButton } from '../assets/css/style';

function HabitsPage() {
  const { user:{token} } = useContext(UserContext);
  const { 
    habits, 
    selectedDays, 
    setSelectedDays, 
    isHabitsLoading, 
    getAllHabits, 
    getTodayHabits, 
    isSaving, 
    setIsSaving } = useContext(HabitsContext);
  const { register, handleSubmit, reset } = useForm();
  const [ isCreating, setIsCreating ] = useState(false);
  const [ isCancelled, setIsCancelled] = useState(false);
  const [habitCache, setHabitCache] = useState('');

  function handleCreate({habit}){
    setIsSaving(true);
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

    createRequest.then(()=> {
      reset();
      getAllHabits();
      getTodayHabits();
      setIsSaving(false);
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
              disabled={isSaving}
            />
            <WeekInput />
            <div className="wrapper">
              <HabitsButton onClick={() => {
                setIsCreating(false);
                setIsCancelled(true);
              }}>Cancelar</HabitsButton>
              <HabitsButton type='submit' name='save' disabled={isSaving}>
                {isSaving ? (<Loader
                  type="ThreeDots"
                  color='white'
                  height={11}
                  width={43}
                />) : 'Salvar'}
              </HabitsButton>
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

      { isHabitsLoading && <Loader 
          type="Bars" heigth="100" width="100" color="grey"
      /> }
    </DefaultContainer>
  );
}

export default HabitsPage;
