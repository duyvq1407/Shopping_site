import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import 'antd/dist/antd.css';
// import './index.css';
import { Menu, Dropdown, Space } from 'antd';
import { CategoryType } from '../../types/category';

type WebsiteLayoutProps = {
    categories: CategoryType[]
  }
  

const WebsiteLayout = (props: WebsiteLayoutProps) => {
    const menu = (
      <Menu>
        {props.categories.map((item, index) => {
            return(
                <Menu.Item key={index + 1 }>
                    <a rel="noopener noreferrer"href="#">
                        {item.name}
                    </a>
                </Menu.Item>
              )
        })}
      </Menu>
    );    
  return (
    <div>
        <header className="bg-light shadow-sm navbar-sticky">
            <div className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="d-none d-sm-block me-4 order-lg-1" href="/">
                        <img src="https://logodownload.org/wp-content/uploads/2019/09/yahoo-logo.png" width={74} alt="Cartzilla" />
                    </a>
                <div className="navbar-toolbar d-flex align-items-center order-lg-3">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"><span className="navbar-toggler-icon" /></button><a className="btn btn-primary btn-shadow" href="https://themes.getbootstrap.com/product/cartzilla-bootstrap-e-commerce-template-ui-kit/" target="_blank" rel="noopener"><i className="ci-cart me-2" />Buy now</a>
                </div>
                <div className="collapse navbar-collapse me-auto order-lg-2" id="navbarCollapse">
                    <hr className="my-3" />
                    {/* Primary menu*/}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/'>Home Page</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/products'>Product Page</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/about'>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/account'>Account</NavLink>
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
                        
                    </ul>
                </div>
                </div>
            </div>
        </header>

        <main className='mt-5 container'>
            <Outlet/>
        </main>
        <footer></footer>
    </div>
  )
}

export default WebsiteLayout