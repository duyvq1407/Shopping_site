import {useForm, SubmitHandler} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
type ProductAddProps = {
  onAdd:(product: TypeInputs) => void
}
type TypeInputs = {
    name: string,
    price:  number
}

const ProductAdd = (props: ProductAddProps) => {
    const {register, handleSubmit, formState: {errors} } = useForm<TypeInputs>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<TypeInputs> = data =>{
      props.onAdd(data)
      navigate('/admin/products')
    }

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
        <button className="btn btn-primary">Add Product</button>
      </div>
    </form>
  )
}

export default ProductAdd