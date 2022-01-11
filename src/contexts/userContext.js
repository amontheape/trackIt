import React, { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import useLocalStorage from "../helpers";

export const UserContext = createContext();

export default function UserProvider( {children} ) {
  const [ isLoginLoading, setIsLoginLoading ] = useState(false);
  const [ isSignUpLoading, setIsSignUpLoading ] = useState(false);
  const [user, setUser] = useLocalStorage('user', null);
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogin({ email, password }) {
    setIsLoginLoading(true);
    const loginRequest = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', { email, password });
    loginRequest.then(({data}) => {
      setUser(data);
      setIsLoginLoading(false);
      navigate('/hoje');
    }, (error) => console.log(error));
  }

  function handleSignUp({email, password, name, image}) {
    setIsSignUpLoading(true);
    const signUpRequest = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', {email, name, image, password });
    signUpRequest.then(() => {  
      navigate('/');
      setIsSignUpLoading(true);
    }, (error) => console.log(error));
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
        handleSignUp,
        isLoginLoading,
        isSignUpLoading
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

