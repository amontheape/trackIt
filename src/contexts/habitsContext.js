import React, { createContext, useContext, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import { UserContext } from "./userContext";

export const HabitsContext = createContext();

export default function HabitsProvider( {children} ) {
  const { user:{token} } = useContext(UserContext);
  const [habits, setHabits] = useState();

  const habitsRequest = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  habitsRequest.then( ({data}) => setHabits(data), (error) => console.log(error));

  return (
    <HabitsContext.Provider value={{
      habits,
      setHabits
    }}>
      { children }
    </HabitsContext.Provider>
  )
}