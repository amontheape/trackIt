import { useState, useContext, useEffect } from "react";
import axios from 'axios';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { HabitsContext } from "../contexts/habitsContext";
import { UserContext } from "../contexts/userContext";
import { DefaultContainer, Title, HabitActionBox, TextWrapper, CheckBox } from "../assets/css/style";

function TodayPage() {
  const [ todayHabits, setTodayHabits ] = useState();
  const { user } = useContext(UserContext);

  const today = dayjs().locale("pt-br").format("dddd DD/MM");
  const weekDay = today.split(' ')[0].replace('-feira', '');
  const dayInMonth = today.split(' ')[1];

  useEffect(()=>{
    const todayRequest = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',
      {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      }
    )

    todayRequest.then(({data}) => setTodayHabits(data), (error) => console.log(error));
  },[])

  return(
    <DefaultContainer>
      <Title>
        <p>{weekDay}, {dayInMonth}</p>
        <span></span>
      </Title>

      {todayHabits?.map(({ name, currentSequence, highestSequence}) => (
        <HabitActionBox>
          <TextWrapper>
            <h1>{name}</h1>
            <p>Sequência atual: <span>{currentSequence === 1 ? `${currentSequence} dia` : `${currentSequence} dias` }</span></p>
            <p>Seu recorde: <span>{highestSequence === 1 ? `${highestSequence} dia` : `${highestSequence} dias`}</span></p>
          </TextWrapper>
          <CheckBox>
            <ion-icon name="checkbox"></ion-icon>
          </CheckBox>
        </HabitActionBox>
      ) )}
    </DefaultContainer>
  )
}

export default TodayPage;