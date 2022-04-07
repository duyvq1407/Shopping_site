import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import 'antd/dist/antd.css';
import "../../App.css"
import { Menu, Dropdown, Space } from 'antd';
import { CategoryType } from '../../types/category';
import WebHeader from '../../components/WebHeader';

type WebsiteLayoutProps = {
    categories: CategoryType[]
  }
  

const WebsiteLayout = (props: WebsiteLayoutProps) => {
  return (
    <div className='container'>
        <WebHeader/>
        <main className='mt-5 container main-content d-block'>
            <Outlet/>
        </main>
        <footer></footer>
    </div>
  )
}

export default WebsiteLayout