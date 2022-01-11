import React, { useContext } from 'react';
import Loader from 'react-loader-spinner';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/userContext';
import { BigLogo, Form, Input, SubmitButton } from '../assets/css/style';
import bigLogo from '../assets/images/BigLogo.png';


function LoginPage(){
  const { isLoginLoading } = useContext(UserContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { handleLogin } = useContext(UserContext);

  return (
    <>
      <BigLogo src={bigLogo} alt='big logo trackIt'/>
      <Form onSubmit={handleSubmit(handleLogin)}>

        <Input type='email' {...register('email', { required: 'Este campo é obrigatório' })} placeholder='email' disabled={isLoginLoading} />
        {errors.email && <p>{errors.email.message}</p>}

        <Input type='password' {...register('password', {
            required: 'Este campo é obrigatório', 
            minLength: {value: 6, message: 'pelo menos 6 caracteres'}
          })}
          placeholder='senha'
          disabled={isLoginLoading}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <SubmitButton type='submit' disabled={isLoginLoading}>
          { isLoginLoading ? (<Loader
            type="ThreeDots"
            color='white'
            height={14}
            width={52}
          />) : 'Entrar'}
        </SubmitButton>
      </Form>

      <Link to='/cadastro'>
        Não tem uma conta? Cadastre-se!
      </Link>
    </>
  )
}

export default LoginPage;