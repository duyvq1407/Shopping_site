import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useForm, SubmitHandler} from 'react-hook-form'
import { login, createAccount } from '../api/user'

type RegisterProps = {
}

type TypeInputs = {
    name: string,
    email: string,
    password: string
}

const Register = (props: RegisterProps) => {
    const {register, handleSubmit, formState:{errors}} = useForm<TypeInputs>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<TypeInputs> = data => {
        createAccount(data)
        navigate("/signin")
    }
  return (
      <form onSubmit = {handleSubmit(onSubmit)}>
          <input type="email" placeholder='Email' {...register('email', {required: true})}/> <br />
          <input type="text" placeholder='Name' {...register('name', {required: true})}/> <br />
          <input type="password" placeholder='Password' {...register('password', {required: true})}/> <br />
          <button>Đăng ký</button>
      </form>
  )
}

export default Register