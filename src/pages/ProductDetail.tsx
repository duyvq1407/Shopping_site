import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { readCate } from '../api/category';
import { read } from '../api/products';
import {IProduct} from "../types/product"

type Props = {}

const ProductDetail = () => {
  const {id} = useParams();
  const [Product, setProduct] = useState<IProduct>()
  const [productRelated, setProductRelated] = useState<IProduct[]>()
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id as string);
      setProduct(data)      
      const {data: productRelated} = await readCate(data.category as string);
      setProductRelated(productRelated.products)
    };
    getProduct();
  },[id])
  return (
    <div>
      <div className="container single-product mt-5">
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
    <div className="container sanphammoi">
        <div className="sanphammoi_tiltle">
            <h2>
              <a href="#">Sản phẩm liên quan</a>
            </h2>
        </div>
        <div className="row">
            {productRelated?.filter((item) => item.name !== Product?.name).slice(0, 4).map((item, index) => {
                return (
                <div className="col-md-3 col-6 pro-loop" key={index+1}>
                    <div className="product">
                        <div className="product_img">
                        <Link to={`/products/${item._id}`}>
                            <div className="figure">
                            <img src={item.image} width={270} height={270}/>
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
  </div>

  )
}

export default ProductDetail