import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import Product from './components/Product'
import {Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { add, list, remove, update } from './api/products';
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css";
import AdminLayout from './pages/layouts/AdminLayout'
import Dashboard from './pages/Dashboard'
import ProductManeger from './pages/ProductManeger'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import ProductAdd from './pages/ProductAdd'
import { IProduct } from './types/product'
import ProductEdit from './pages/ProductEdit'
import PriveRouter from './components/PriveRouter'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState<IProduct[]>([])
  useEffect(() => {
    const getProducts = async () =>{
      const { data } = await list();
      setProducts(data)
    }
    getProducts();
  },[])

  const removeItem = (_id:string) =>{
    //call api
    remove(_id);
    //rerender
    setProducts(products.filter(item => item._id !== _id))
  }

  const onHandleAdd = async (product : IProduct) => {
    const { data } = await add(product);
    setProducts([...products,data])
  }

  const onHandleUpdate = async (product : IProduct) => {
    const { data } = await update(product);
    setProducts(products.map(item => item._id == data._id ? data : item))
  }

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard"/>}/>
            <Route path='dashboard' element={<Dashboard />}/>
            <Route path='products'>
              <Route index element={<PriveRouter><ProductManeger products={products} onRemove={removeItem}/></PriveRouter>}/>
              <Route path='add' element={<PriveRouter><ProductAdd name="duy" onAdd={onHandleAdd}/></PriveRouter>}/>
              <Route path=':id/edit' element={<PriveRouter><ProductEdit onUpdate={onHandleUpdate}/></PriveRouter>}/>
            </Route>
          </Route>
          <Route path='/' element={<WebsiteLayout/>}>
            <Route index element = {<Home/>}/>
            <Route path='/product'>
              <Route index  element = {<h1>Product Page</h1>} />
              <Route path=':id' element = {<ProductDetail/> }/>
            </Route>
            <Route path='/About' element = {<h1>About Page</h1>}/>
            <Route path='/signin' element = {<Login />}/>
            <Route path='/signup' element = {<Register />}/>
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App