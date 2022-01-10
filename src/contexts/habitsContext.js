import React, { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import { UserContext } from "./userContext";

export const HabitsContext = createContext();

export default function HabitsProvider( {children} ) {
  const { user } = useContext(UserContext);
  const [selectedDays, setSelectedDays] = useState([]);
  const [habits, setHabits] = useState([]);
  const [isHabitsLoading, setIsHabitsLoading] = useState(false);
  const [percentage, setPercentage] = useState(0);

  useEffect(()=>{
    if(user){
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
  }, [user]);
  
  return (
    <HabitsContext.Provider value={{
      habits,
      setHabits,
      selectedDays,
      setSelectedDays,
      isHabitsLoading,
      percentage,
      setPercentage
    }}>
      { children }
    </HabitsContext.Provider>
  )
}