import React from 'react'
import { Navigate } from 'react-router-dom';

type PriveRouterProps = {
  children: JSX.Element
}

const PriveRouter = (props: PriveRouterProps) => {
  const { role } = JSON.parse(localStorage.getItem('user')); // lấy từ localstorage ra
  if (role != 0) {
    return <Navigate to='/signin'/>
  }
  return props.children
}

export default PriveRouter