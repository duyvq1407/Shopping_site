import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import {useNavigate, useParams} from 'react-router-dom'
import { read } from '../../api/products'
import { IProduct } from '../../types/product'
type ProductEditProps = {
    onUpdate: (product: IProduct) => void
}
type FormInput = {
    name : string,
    price: number
}
const ProductEdit = (props: ProductEditProps) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormInput>();
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() => {
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
        <button className="btn btn-primary">Update Product</button>
        </div>
    </form>
  )
}

export default ProductEdit