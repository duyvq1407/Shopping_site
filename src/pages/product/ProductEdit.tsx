import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import {useNavigate, useParams} from 'react-router-dom'
import { listCate } from '../../api/category'
import { read } from '../../api/products'
import { CategoryType } from '../../types/category'
import { IProduct } from '../../types/product'
type ProductEditProps = {
    onUpdate: (product: IProduct) => void
    categories: CategoryType[]
}
type FormInput = {
    name : string,
    price: number,
    image: string,
    category: string
}
const ProductEdit = (props: ProductEditProps) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormInput>();
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() => {
        const getCategories = async() => {
            const {data: categories} = await listCate();
        }
        getCategories();
        const getProduct = async() =>{
            const {data} = await read(id);
            reset(data)
        }
        getProduct()
    },[])

    const onSubmit: SubmitHandler<FormInput> = data => {
        console.log(data)
        props.onUpdate(data)
        navigate('/admin/products')
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <div className="mb-3">
            <label className="form-label">Tên sản phẩm</label>
            <input type="text" {...register('name', {required: true})} className="form-control"/>
        </div>
        <div className="mb-3">
            <label className="form-label">Giá sản phẩm</label>
            <input type="number" {...register('price', {required: true})} className="form-control"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Ảnh sản phẩm</label>
          <input type="file" {...register('image')} className="form-control"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Danh mục</label>
          <select className="form-select" {...register('category', {required: true})}>
              {/* <option selected disabled>Chọn danh mục</option> */}
            {props.categories.map(item => {
              return <option value={item._id}>{item.name}</option>
            })}
          </select>
        </div>
        <button className="btn btn-primary">Update Product</button>
        </div>
    </form>
  )
}

export default ProductEdit