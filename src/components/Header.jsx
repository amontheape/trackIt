import { TopBar, SmallLogo, ProfilePicture} from '../assets/css/style';
import { useContext } from 'react';
import { UserContext } from '../contexts/userContext';
import smallLogo from '../assets/images/SmallLogo.png';

function Header(){
  const { user } = useContext(UserContext);

  return(
    <TopBar>
      <SmallLogo src={smallLogo} alt='small logo trackIt' />
      <ProfilePicture src={user.image} />
    </TopBar>
  )
}

export default Header;