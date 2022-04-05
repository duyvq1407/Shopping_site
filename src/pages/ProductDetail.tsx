import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { read } from '../api/products';
import {IProduct} from "../types/product"

type Props = {}

const ProductDetail = () => {
  const {id} = useParams();
  const [Product, setProduct] = useState<IProduct>()
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id as string);
      setProduct(data)      
    };
    getProduct();
  },[])
  return (
    <div>{Product?.name}</div>
  )
}

export default ProductDetail