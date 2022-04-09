import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { readCate } from '../api/category';
import { read } from '../api/products';
import {IProduct} from "../types/product"

type Props = {}

const ProductDetail = () => {
  const {id} = useParams();
  const [Product, setProduct] = useState<IProduct>()
  const [Products, setProducts] = useState<IProduct[]>()
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id as string);
      setProduct(data)      
    };
    getProduct();
    const getProducts = async () => {
      console.log(Product?._id)
      const { data } = await readCate(Product?._id as string);
      setProducts(data.products)      
    };
    getProducts();
  },[])
  return (
    <div className="container single-product">
      <div className="row">
        <div className="col" style={{width: '90%'}}>
          <img src={Product?.image} width={500} id="large_img" />
          <br /><br />
        </div>
        <div className="col">
          <div className="single-product-title">
            <h2>{Product?.name}</h2>
          </div>
          <div className="single-product-price">
            <h4>{new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(Product?.price as number)}</h4>
          </div>
          <form >
            {/* <div className="form-group-size">
              <div className="option_select">
                <input type="radio" id="size_S" name="size" defaultValue="S" defaultChecked />
                <label className="label_for_size" htmlFor="size_S">S</label>
              </div>
              <div className="option_select">
                <input type="radio" id="size_M" name="size" defaultValue="M" />
                <label className="label_for_size" htmlFor="size_M">M</label>
              </div>
              <div className="option_select">
                <input type="radio" id="size_L" name="size" defaultValue="L" />
                <label className="label_for_size" htmlFor="size_L">L</label>
              </div>
              <div className="option_select">
                <input type="radio" id="size_XL" name="size" defaultValue="XL" />
                <label className="label_for_size" htmlFor="size_XL">XL</label>
              </div>
            </div> */}
            <div className="d-flex align-items-center" style={{margin: '20px 0'}}>
              <input type="number" defaultValue={1} min={1} />
              <a className="btn btn-dark">Thêm vào giỏ</a>
            </div>
          </form>
          <div className="single-product-details">
            <h2>Miêu tả</h2>
            <br />
          </div>
        </div>
      </div>
  </div>

  )
}

export default ProductDetail