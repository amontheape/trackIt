import { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import { HabitsContext } from '../contexts/habitsContext';
import { BottomBar, ProgressWrapper, StyledLink } from '../assets/css/style';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

function Footer() {
  const { percentage } = useContext(HabitsContext);

  return (
    <BottomBar>
      <StyledLink to='/habitos'>Hábitos</StyledLink>
      <Link to='/hoje'>
        <ProgressWrapper>
          <CircularProgressbar
            value={percentage}
            text='Hoje'
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#52B6FF",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent"
            })}
          />
        </ProgressWrapper>
      </Link>
      <StyledLink to='/historico'>Histórico</StyledLink>
    </BottomBar>
  )
}

export default Footer;
