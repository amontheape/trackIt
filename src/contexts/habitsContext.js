import React, { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import { UserContext } from "./userContext";

export const HabitsContext = createContext();

export default function HabitsProvider( {children} ) {
  const { user } = useContext(UserContext);
  const [selectedDays, setSelectedDays] = useState([])
  const [habits, setHabits] = useState([]);

  useEffect(()=>{
    if(user){
      const habitsRequest = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', {
        headers: {
          Authorization: `Bearer ${user?.token}`
        }
      });
      habitsRequest.then(({ data }) => setHabits(data), (error) => console.log(error));
    }
  }, []);
  
  return (
    <HabitsContext.Provider value={{
      habits,
      setHabits,
      selectedDays,
      setSelectedDays
    }}>
      { children }
    </HabitsContext.Provider>
  )
}