import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import Product from './components/Product'
import {Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { list } from './api/products';
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css";
import AdminLayout from './pages/layouts/AdminLayout'
import Dashboard from './pages/Dashboard'
import ProductManeger from './pages/ProductManeger'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'


interface IProduct{
    id: string, 
    name: string
}

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState<IProduct[]>([])
  useEffect(() => {
    const getProducts = async () =>{
      const { data } = await list();
      console.log(data)
      setProducts(data)
    }
    getProducts();
  },[])
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard"/>}/>
            <Route path='dashboard' element={<Dashboard />}/>
            <Route path='products' element={<ProductManeger />}/>
          </Route>
          <Route path='/' element={<WebsiteLayout/>}>
            <Route index element = {<Home/>}/>
            <Route path='/product'>
              <Route index  element = {<h1>Product Page</h1>} />
              <Route path=':id' element = {<ProductDetail/> }/>
            </Route>
            <Route path='/About' element = {<h1>About Page</h1>}/>
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App