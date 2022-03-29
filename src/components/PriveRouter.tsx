import React from 'react'
import { Navigate } from 'react-router-dom';

type PriveRouterProps = {
  children: JSX.Element
}

const PriveRouter = (props: PriveRouterProps) => {
  const { user } = JSON.parse(localStorage.getItem('user') as string); // lấy từ localstorage ra
  if (user.role != 1) {
    return <Navigate to='/signin'/>
  }
  return props.children
}

export default PriveRouter