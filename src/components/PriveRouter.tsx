import React from 'react'
import { Navigate } from 'react-router-dom';

type PriveRouterProps = {
  children: JSX.Element
}

const PriveRouter = (props: PriveRouterProps) => {
  const isAuth = true; // lấy từ localstorage ra
  if (!isAuth) {
    return <Navigate to='/login'/>
  }
  return props.children
}

export default PriveRouter