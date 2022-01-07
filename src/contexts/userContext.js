import React, { createContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import useSessionStorage from "../helpers";

export const UserContext = createContext();

export default function UserProvider( {children} ) {
  const [user, setUser] = useSessionStorage('user', null);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(JSON.stringify(user));

  function handleLogin({ email, password }) {
    const loginRequest = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', { email, password });
    loginRequest.then(({data}) =>{
      setUser(data)
      navigate('/habitos');
    }, (error) => console.log(error));

    console.log('login efetuado: '+ JSON.stringify(user) );
  }

  function handleSignUp({email, password, name, image}) {
    const signUpRequest = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', {email, name, image, password });
    signUpRequest.then(() => navigate('/'), (error) => console.log(error));
    console.log('cadastro efetuado: ' + user);
  }

  function handleLogOut(){
    setUser(null);
    navigate('/');
  }

  useEffect(() => {
    if (user) {
      const decoded = jwt_decode(user.token);
      if (decoded?.exp && decoded.exp * 1000 < Date.now()) {
        handleLogOut();
      }
      if(location.pathname === '/'){
        navigate('/habitos');
      }
    } else navigate('/');
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        handleLogin,
        handleSignUp
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

