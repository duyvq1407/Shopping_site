import { Dropdown, Menu, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { listCate } from '../api/category'
import "../App.css"
import { useForm, SubmitHandler } from 'react-hook-form'
import { CategoryType } from '../types/category'
type WebHeaderProps = {}
type FormInput = {
    q: string,
}

const WebHeader = (props: WebHeaderProps) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormInput>();
    const navigate = useNavigate();
    const [categories, SetCategories] = useState<CategoryType[]>([])
    useEffect(() => {
        const getCategory = async () =>{
            const {data} = await listCate();
            SetCategories(data)
        }
        getCategory()
    },[])
    const menu = (
      <Menu>
        {categories.map((item, index) => {
            return(
                <Menu.Item key={index + 1 }>
                    <NavLink className='nav-link' to={`/categories/${item._id}`}>
                        {item.name}
                    </NavLink>
                </Menu.Item>
              )
        })}
      </Menu>
    );    
    const onSubmit: SubmitHandler<FormInput> = data => {
        localStorage.setItem("inputSearch",JSON.stringify(data))
        // location.href =`/search?q=${data.q}`
        navigate(`/search?q=${data.q}`)
    }
  return (
    <header className="p-3 mb-5 main-header border-bottom fixed-top">
        <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                <img src="https://logos-world.net/wp-content/uploads/2020/10/Yahoo-Emblem.png" width={50} alt="" />
            </a>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li className="nav-item">
                    <NavLink className="nav-link" to='/'>Home Page</NavLink>
                </li>
                <li className="nav-item">     
                    <Space direction="vertical">
                        <Space wrap>
                        <Dropdown overlay={menu}>
                            <NavLink className="nav-link" to=''>Category</NavLink>
                        </Dropdown>
                        </Space>
                    </Space>,
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/about'>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/account'>Account</NavLink>
                </li>
            </ul>
            <form onSubmit={handleSubmit(onSubmit)} action='/search' className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 d-flex">
                <input type="search" {...register('q')} className="form-control" placeholder="Search..." aria-label="Search" />
                <button className='ms-1 btn btn-primary'>Search</button>
            </form>
            </div>
        </div>
    </header>

  )
}

export default WebHeader