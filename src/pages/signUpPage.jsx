import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/userContext';

function SignUpPage(){
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { handleSignUp } = useContext(UserContext);

  return (
    <>
      <form onSubmit={handleSubmit(handleSignUp)}>

        <input type='email' {...register('email', { required: 'Este campo é obrigatório' })} placeholder='email' />
        {errors.email && <p>{errors.email.message}</p>}

        <input type='password' {...register('password', {
          required: 'Este campo é obrigatório',
          minLength: { value: 6, message: 'pelo menos 6 caracteres' }
        })}
          placeholder='senha'
        />
        {errors.password && <p>{errors.password.message}</p>}

        <input type='text' {...register('name', { required: 'Este campo é obrigatório' })} placeholder='nome' />
        {errors.name && <p>{errors.name.message}</p>}

        <input type='url' {...register('image', { required: 'Este campo é obrigatório' })} placeholder='foto' />
        {errors.photo && <p>{errors.image.message}</p>}

        <button type='submit'>
          Cadastrar
        </button>
      </form>

      <Link to='/'>
        Já tem uma conta? Faça login!
      </Link>
    </>
  )
}

export default SignUpPage;