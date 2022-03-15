import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import Product from './components/Product'
import {Routes, Route, NavLink } from 'react-router-dom';
import { list } from './api/products'

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
      <header>
        <ul>
          <li>
            <NavLink to='/'>Home Page</NavLink>
          </li>
          <li>
            <NavLink to='/products'>Product Page</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<h1>Home page</h1>}/>
          <Route path='/products' element={products.map(item => <div>{item.name}</div>)}/>
          <Route path='/about' element={<ShowInfo name="Duy" age={0}/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App