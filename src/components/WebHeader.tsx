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
                <img src="data:image/png;base64,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" width={50} alt="" />
            </a>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li className="nav-item">
                    <NavLink className="nav-link" to='/'>Home</NavLink>
                </li>
                <li className="nav-item">     
                    <Space direction="vertical">
                        <Space wrap>
                        <Dropdown overlay={menu}>
                            <NavLink className="nav-link" to='/categories'>Category</NavLink>
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
            <form onSubmit={handleSubmit(onSubmit)} action='/search' className="align-items-center col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 d-flex h-50">
                <input type="search" {...register('q')} className="form-control" placeholder="Search..." aria-label="Search" />
                <button className='ms-1 btn btn-primary h-50'>Search</button>
            </form>
            </div>
        </div>
    </header>

  )
}

export default WebHeader