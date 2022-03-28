import { useEffect } from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { listCate } from '../../api/category'
type ProductAddProps = {
  onAdd:(product: TypeInputs) => void
}
type TypeInputs = {
    name: string,
    category?: string,
    price:  number
}

const ProductAdd = (props: ProductAddProps) => {
    const {register, handleSubmit, formState: {errors} } = useForm<TypeInputs>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<TypeInputs> = data =>{
      props.onAdd(data)
      navigate('/admin/products')
    }
    useEffect(() => {
        const getCategories = async() => {
            const {data: categories} = await listCate();
            console.log(categories)
        }
        getCategories();
    },[])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="mb-3">
          <label className="form-label">Tên sản phẩm</label>
          <input type="text" {...register('name')} className="form-control"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Giá sản phẩm</label>
          <input type="number" {...register('price')} className="form-control"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Danh mục</label>
          <select className="form-select" {...register('category')}>
            {/* {data.map(item => {
              return <option value={item._id}>{item.name}</option>
            })} */}
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <button className="btn btn-primary">Add Product</button>
      </div>
    </form>
  )
}

export default ProductAdd