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
        navigate('/')
    }
  return (
      <form onSubmit={handleSubmit(onSubmit)} className="container">
        <div className="mb-3" >
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" {...register('email', {required: true})}/>
        </div>
        <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" {...register('password', {required: true})}/>
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
  )
}

export default Login