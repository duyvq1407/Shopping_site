import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { add, list, remove, update } from './api/products';
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css";
import AdminLayout from './pages/layouts/AdminLayout'
import Dashboard from './pages/Dashboard'
import ProductManeger from './pages/product/ProductManager'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import Home from './pages/Home'
import ProductDetail from './pages/product/ProductDetail'
import ProductAdd from './pages/product/ProductAdd'
import { IProduct } from './types/product'
import ProductEdit from './pages/product/ProductEdit'
import PriveRouter from './components/PriveRouter'
import Login from './pages/Login'
import Register from './pages/Register'
import CategoryManeger from './pages/category/CategoryManager';
import { CategoryType } from './types/category';
import { addCate, listCate, removeCate, updateCate } from './api/category';
import CategoryAdd from './pages/category/CategoryAdd';
import CategoryEdit from './pages/category/CategoryEdit';
import Account from './pages/Account';
import CategoryDetail from './pages/category/CategoryDetail';

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState<IProduct[]>([])
  const [categories, setCategories] = useState<CategoryType[]>([])
  useEffect(() => {
    const getProducts = async () =>{
      const { data } = await list();
      setProducts(data)
    }
    getProducts();
    const getCategories = async () =>{
      const { data } = await listCate();
      setCategories(data)
    }
    getCategories();
  },[])

  const removeItem = (_id:string) =>{
    //call api
    remove(_id);
    //rerender
    setProducts(products.filter(item => item._id !== _id))
  }
  const removeItemCate = (_id:string) =>{
    //call api
    removeCate(_id);
    //rerender
    setCategories(categories.filter(item => item._id !== _id))
  }

  const onHandleAdd = async (product : IProduct) => {
    const { data } = await add(product);
    setProducts([...products,data])
  }
  
  const onHandleAddCate = async (category : CategoryType) => {
    const { data } = await addCate(category);
    setCategories([...categories,data])
  }

  const onHandleUpdate = async (product : IProduct) => {
    const { data } = await update(product);
    setProducts(products.map(item => item._id == data._id ? data : item))
  }

  const onHandleUpdateCate = async (category : CategoryType) => {
    const { data } = await updateCate(category);
    setCategories(categories.map(item => item._id == data._id ? data : item))
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
              <Route path='add' element={<PriveRouter><ProductAdd categories={categories} onAdd={onHandleAdd}/></PriveRouter>}/>
              <Route path=':id/edit' element={<PriveRouter><ProductEdit categories={categories} onUpdate={onHandleUpdate}/></PriveRouter>}/>
            </Route>
            <Route path='categories'>
              <Route index element={<PriveRouter><CategoryManeger categories={categories} onRemove={removeItemCate}/></PriveRouter>}/>
              <Route path='add' element={<PriveRouter><CategoryAdd onAdd={onHandleAddCate}/></PriveRouter>}/>
              <Route path=':id/edit' element={<PriveRouter><CategoryEdit onUpdate={onHandleUpdateCate}/></PriveRouter>}/>
              <Route path=':id/view' element={<PriveRouter><CategoryDetail products={products} onRemove={removeItem}/></PriveRouter>}/>
            </Route>
          </Route>
          <Route path='/' element={<WebsiteLayout/>}>
            <Route index element = {<Home/>}/>
            <Route path='/products'>
              <Route index  element = {<h1>Product Page</h1>} />
              <Route path=':id' element = {<ProductDetail/> }/>
            </Route>
            <Route path='/About' element = {<h1>About Page</h1>}/>
            <Route path='/signin' element = {<Login />}/>
            <Route path='/signup' element = {<Register />}/>
            <Route path='/account' element = {<PriveRouter><Account/></PriveRouter>}/>
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App