import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { search } from '../api/products'
import { IProduct } from '../types/product'

type SearchPageProps = {}

const SearchPage = (props: SearchPageProps) => {
    useParams()
    const [products, setProducts] = useState<IProduct[]>([])
    const {q} = JSON.parse(localStorage.getItem('inputSearch') as string)
    useEffect(() => {
      const getProduct = async () => {
      const { data } = await search(q);
      setProducts(data)
      }
      getProduct()
    },[q])
  return (
    <div>
      <p>Kết quả cho từ khóa <span style={{fontStyle: 'italic'}}>" {q} "</span>...</p>
      <div className='d-flex justify-content-between'>
      {products.map((item, index) => {
        return (
          <div key={index+1}>
            <img src={item.image} width={200} />
            <p>{item.name}</p>
          </div>
        )
      })}
    </div>
    </div>
    
  )
}

export default SearchPage