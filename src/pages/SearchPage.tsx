import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { search } from '../api/products'
import { IProduct } from '../types/product'
import Product from './Product'

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
    <div className='container'>
        <div className="row">
        <p>Tìm thấy <span style={{fontStyle: 'italic', fontWeight: 'bold'}}> {products.length} </span>  kết quả cho từ khóa " <span style={{fontStyle: 'italic', fontWeight: 'bold'}}>{q} </span> "...</p>
            {products.map((item, index) => {
                return (
                <div className="col-md-3 col-6 pro-loop" key={index+1}>
                    <div className="product">
                        <div className="product_img">
                        <Link to={`/products/${item._id}`}>
                            <div className="figure">
                            <img src={item.image} width={270} height={270}/>
                            {/* <img src="./assets/img/<?php echo $value['anhchitiet'] ?>" className="image-hover" /> */}
                            </div>
                        </Link>
                        </div>
                        <div className="product_detail">
                        <h3 className="product_detail-name">
                            <Link to={`/products/${item._id}`}>{item.name}</Link>
                        </h3>
                        <div className="product_detail-price">
                            <p>{new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(item.price)}</p>
                        </div>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
      </div>    
  )
}

export default SearchPage