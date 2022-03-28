import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useForm, SubmitHandler} from 'react-hook-form'
import { login } from '../api/user'

type LoginProps = {
}

type TypeInputs = {
    name: string,
    email: string,
    password: string,
    role?: number
}

const Login = (props: LoginProps) => {
    const {register, handleSubmit, formState: {errors}} = useForm<TypeInputs>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<TypeInputs> = async (data) =>{
        const {data: user} = await login(data);
        localStorage.setItem('user', JSON.stringify(user))

    }
  return (
      <form onSubmit={handleSubmit(onSubmit)}>
          <input type="email" placeholder='Email' {...register('email', {required: true})}/> <br />
          <input type="password" placeholder='Password' {...register('password', {required: true})}/> <br />
          <button>Đăng nhập</button>
      </form>
  )
}

export default Login