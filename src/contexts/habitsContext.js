import React, { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import { UserContext } from "./userContext";
import useLocalStorage from "../helpers";

export const HabitsContext = createContext();

export default function HabitsProvider( {children} ) {
  const { user } = useContext(UserContext);
  const [selectedDays, setSelectedDays] = useState([]);
  const [habits, setHabits] = useState([]);
  const [isHabitsLoading, setIsHabitsLoading] = useState(false);
  const [percentage, setPercentage] = useLocalStorage('progress', '0');
  const [todayHabits, setTodayHabits] = useState();
  const [ isSaving, setIsSaving ] = useState(false);

  function handleDelete(habitId) {
    Swal.fire({
      title: 'Você tem certeza?',
      text: "Esta ação deletará seu hábito",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'var(--lightBlue)',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Deletar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        const deleteRequest = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        });
      deleteRequest.then(() => {
        setHabits(habits.filter(({id}) => id !== habitId));
        getAllHabits();
        getTodayHabits();
      }, (error) => console.log(error));
      }
    })
  }

  function getAllHabits(){
    if (user) {
      setIsHabitsLoading(true);
      const habitsRequest = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', {
        headers: {
          Authorization: `Bearer ${user?.token}`
        }
      });
      habitsRequest.then(({ data }) => {
        setHabits(data);
        setIsHabitsLoading(false);
      }, (error) => {
        console.log(error);
        setIsHabitsLoading(false);
      });
    }
  }

  function getTodayHabits() {
    const todayRequest = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',
      { headers: { Authorization: `Bearer ${user.token}` } });

    todayRequest.then(({ data }) => {
      setTodayHabits(data);
    }, (error) => console.log(error));
  }

  function updateProgress() {
    const habitsDone = todayHabits?.filter(({ done }) => done).length;
    const totalHabits = todayHabits?.length;
    let result = ((habitsDone / totalHabits) * 100).toFixed();
    setPercentage(Math.ceil(result));
  }

  useEffect(()=>{
    getAllHabits();
  }, [user]);

  useEffect(() => {
    updateProgress()
  }, [todayHabits]);
  
  return (
    <HabitsContext.Provider value={{
      habits,
      setHabits,
      selectedDays,
      setSelectedDays,
      isHabitsLoading,
      percentage,
      setPercentage,
      handleDelete,
      getAllHabits,
      todayHabits,
      getTodayHabits,
      isSaving,
      setIsSaving
    }}>
      { children }
    </HabitsContext.Provider>
  )
}