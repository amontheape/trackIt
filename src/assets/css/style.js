import styled from "styled-components";
import { Link } from 'react-router-dom';

/* ---------------Login--------------- */

const BigLogo = styled.img`
  width: 180px;
  margin-bottom: 32px;
`
/* ---------------General--------------- */

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & >:last-child {
    margin-bottom: 25px;
  }
`
const Input = styled.input`
  width: 303px;
  height: 45px;
  margin-bottom: 6px;

  border: 1px solid #D5D5D5;
  border-radius: 5px;

  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;
  text-align: center;

  ::placeholder{
    color: #DBDBDB;
    text-align: left;
    padding: 9px 11px;
  }
`
const SubmitButton = styled.button`
  width: 303px;
  height: 45px;

  background-color: var(--lightBlue);

  border: 1px solid var(--lightBlue);
  border-radius: 5px;

  color: #fff;
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: 26px;
  text-align: center;
`
const DefaultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 98px 18px;

  min-height: 100vh;
  width: 100%;
  background-color: #f2f2f2;
` 
const WeekWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 4px;
`
const DayInput = styled.input`
    height: 30px;
    width: 30px;

    border: 1px solid #d4d4d4;
    border-radius: 5px;

    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 25px;

    color: ${ ({selected}) => selected ? '#fff' : '#D4D4D4' };
    background-color: ${ ({ selected }) => selected ? '#D4D4D4' : '#fff' };
`
const Warning = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    word-break: break-word;

    color: #666;
`

/* ---------------Footer--------------- */

const ProgressWrapper = styled.div`
  margin-top: -40px;

  height: 91px;
  width: 91px;
`
const BottomBar = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: #fff;
  
  width: 100%;
  height: 70px;
`
const StyledLink = styled(Link)`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: center;

  color: var(--lightBlue);
  text-decoration: none;
`

/* ---------------Header--------------- */

const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--darkBlue);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  padding: 10px 18px;

  width: 100%;
  height: 70px;
`

const SmallLogo = styled.img`
  width: 100px;
`

const ProfilePicture = styled.img`
  height: 52px;
  width: 52px;
  border-radius: 26px;
`
/* ---------------Habits--------------- */

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 40px;
  width: 100%;
  margin-bottom: 20px;

  & >p {
    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    line-height: 29px;

    color: var(--darkBlue);
  }

  & >button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 24px;
    font-weight: 900;

    width: 40px;
    height: 35px;
    background-color: var(--lightBlue);

    border: none;
    border-radius: 5px;
  }

  & >span{
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: #8FC549;
  }
`
const HabitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
  padding: 18px;
  margin-bottom: 10px;

  background-color: #fff;
  border-radius: 5px;

  & >p {
    color: #666;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;

    margin-bottom: 8px;
  }
`
const HabitsButton = styled.button`
  width: 84px;
  height: 35px;

  border: none;
  background-color: ${({ name }) => name === 'save' ? 'var(--lightBlue)' : '#fff'};

  color: ${({ name }) => name === 'save' ? '#fff' : 'var(--lightBlue)'};
  font-style: normal;
  font-weight: normal;
  font-size: 15.976px;
  line-height: 20px;
  text-align: center;
`
const Trash = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 10px;
  right: 10px;

  height: 20px;
  width: 20px;

  font-size: 18px;
  color: #666;
  border: none;
`
/* ---------------Today--------------- */

const HabitActionBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 13px;
  margin-bottom: 10px;
  
  border: none;
  border-radius: 5px;

  background-color: #fff;

`
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  font-style: normal;
  font-weight: normal;
  color: #666;

  & >h1{
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 8px;
  }

  & >p{
    font-size: 13px;
    line-height: 16px;
  }

  & >p>span{
    font-size: 13px;
    line-height: 16px;
    color: #8FC549;
  }
`
const CheckBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 84px;

  width: 84px;
  height: 84px;
`

/* ---------------END--------------- */

export {
  BigLogo,
  Form,
  Input,
  SubmitButton,
  DefaultContainer,
  WeekWrapper,
  DayInput,
  Warning,
  ProgressWrapper,
  BottomBar,
  StyledLink,
  TopBar,
  SmallLogo,
  ProfilePicture,
  Title,
  HabitWrapper,
  HabitsButton,
  Trash,
  HabitActionBox,
  TextWrapper,
  CheckBox
}