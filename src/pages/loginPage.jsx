import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/userContext';


function LoginPage(){
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { handleLogin } = useContext(UserContext);

  return (
    <>
      <form onSubmit={handleSubmit(handleLogin)}>

        <input type='email' {...register('email', {required: 'Este campo é obrigatório'} )} placeholder='email' />
        {errors.email && <p>{errors.email.message}</p>}

        <input type='password' {...register('password', {
            required: 'Este campo é obrigatório', 
            minLength: {value: 6, message: 'pelo menos 6 caracteres'}
          })}
          placeholder='senha'
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type='submit'>
          Entrar
        </button>
      </form>

      <Link to='/cadastro'>
        Não tem uma conta? Cadastre-se!
      </Link>
    </>
  )
}

export default LoginPage;