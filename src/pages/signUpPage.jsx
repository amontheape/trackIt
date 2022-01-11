import { BigLogo, Form, Input, SubmitButton } from '../assets/css/style';
import Loader from 'react-loader-spinner';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/userContext';
import bigLogo from '../assets/images/BigLogo.png';

function SignUpPage(){
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { handleSignUp, isSignUpLoading } = useContext(UserContext);

  return (
    <>
      <BigLogo src={bigLogo} alt='big logo trackIt' />
      <Form onSubmit={handleSubmit(handleSignUp)}>

        <Input type='email' {...register('email', { required: 'Este campo é obrigatório' })} placeholder='email' disabled={isSignUpLoading} />
        {errors.email && <p>{errors.email.message}</p>}

        <Input type='password' {...register('password', {
          required: 'Este campo é obrigatório',
          minLength: { value: 6, message: 'pelo menos 6 caracteres' }
        })}
          placeholder='senha'
          disabled={isSignUpLoading}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <Input type='text' {...register('name', { required: 'Este campo é obrigatório' })} placeholder='nome' disabled={isSignUpLoading} />
        {errors.name && <p>{errors.name.message}</p>}

        <Input type='url' {...register('image', { required: 'Este campo é obrigatório' })} placeholder='foto' disabled={isSignUpLoading} />
        {errors.photo && <p>{errors.image.message}</p>}

        <SubmitButton type='submit' disabled={isSignUpLoading}>
          {isSignUpLoading ? (<Loader
            type="ThreeDots"
            color='white'
            height={14}
            width={52}
          />) : 'Cadastrar'}
        </SubmitButton>
      </Form>

      <Link to='/'>
        Já tem uma conta? Faça login!
      </Link>
    </>
  )
}

export default SignUpPage;