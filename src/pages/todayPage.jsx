import { useState, useContext, useEffect } from "react";
import axios from 'axios';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { HabitsContext } from "../contexts/habitsContext";
import { UserContext } from "../contexts/userContext";
import { DefaultContainer, Title, HabitActionBox, TextWrapper, CheckBox } from "../assets/css/style";

function TodayPage() {
  const { user } = useContext(UserContext);
  const { percentage, todayHabits, getTodayHabits } = useContext(HabitsContext);

  const today = dayjs().locale("pt-br").format("dddd DD/MM");
  const weekDay = today.split(' ')[0].replace('-feira', '');
  const dayInMonth = today.split(' ')[1];
  
  const hasHabitDone = todayHabits?.some(({ done }) => done);

  function handleCheck(id, done) {
    if(done){
      const uncheckRequest = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {},
        { headers: { Authorization: `Bearer ${user.token}`} });
      uncheckRequest.then(() => getTodayHabits(), (error) => console.log(error));
    } else {
      const checkRequest = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {},
        { headers: { Authorization: `Bearer ${user.token}`} });
      checkRequest.then(() => getTodayHabits(), (error) => console.log(error));
    }
  }

  useEffect(() => {
    getTodayHabits();
  }, [])

  return(
    <DefaultContainer>
      <Title column >
        <p>{weekDay}, {dayInMonth}</p>
        <span>{ (hasHabitDone && todayHabits) ? `${Math.ceil(percentage)}% dos hábitos concluídos` : 'Nenhum hábito concluído ainda' }</span>
      </Title>

      {todayHabits?.map(({ id, name, done, currentSequence, highestSequence}) => (
        <HabitActionBox>
          <TextWrapper done={done} record={currentSequence > 0 && currentSequence === highestSequence}>
            <h1>{name}</h1>
            <p>Sequência atual: <span>{currentSequence === 1 ? `${currentSequence} dia` : `${currentSequence} dias` }</span></p>
            <p>Seu recorde: <span>{highestSequence === 1 ? `${highestSequence} dia` : `${highestSequence} dias`}</span></p>
          </TextWrapper>
          <CheckBox onClick={()=> handleCheck(id, done)} done={done}>
            <ion-icon name="checkbox"></ion-icon>
          </CheckBox>
        </HabitActionBox>
      ) )}
    </DefaultContainer>
  )
}

export default TodayPage;