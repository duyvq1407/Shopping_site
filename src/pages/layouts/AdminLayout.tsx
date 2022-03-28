import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Breadcrumb } from 'antd';
import "../../index.css";
import Sidebar from '../../components/Sidebar';
import AdminSidebar from '../../components/AdminSidebar';

const { Header, Content, Footer } = Layout;

type Props = {};


const AdminLayout = (props: Props) => {
  return (    
    <Layout style={{ minHeight: '100vh' }}>
      <AdminSidebar />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
    // <div>
    //   <header className="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow">
    //     <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>
    //     <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon" />
    //     </button>
    //     <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
    //     <div className="navbar-nav">
    //       <div className="nav-item text-nowrap">
    //         <a className="nav-link px-3" href="#">Sign out</a>
    //       </div>
    //     </div>
    //   </header>
    //   <div className="container-fluid">
    //     <div className="row">
    //       <Sidebar />
    //       <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className='' /></div><div className="chartjs-size-monitor-shrink"><div className='' /></div></div>
    //         <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    //           <h1 className="h2">Dashboard</h1>
              
    //         </div>    
    //         <Outlet />   
    //       </main>
    //     </div>
    //   </div>
    // </div>
  )
}

export default AdminLayout