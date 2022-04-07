import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { readCate } from '../api/category'
import { IProduct } from '../types/product'

type Props = {}

const CateDetail = (props: Props) => {
  const [products, setProducts]= useState<IProduct[]>([])
  const {id} = useParams();
  console.log(id)
  useEffect(()=>{
    const getProductByCate = async () =>  {
      const {data} = await readCate(id as string);
      setProducts(data.products)
    }
    getProductByCate()
  },[id])
  return (
    <div className='d-flex '>
      {products.map((item, index) => {
        return (
          <div>
            <img src={item.image} width={300} />
            <p>{item.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default CateDetail