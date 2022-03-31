import axios from 'axios'
import { useEffect } from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CategoryType } from '../../types/category'
type ProductAddProps = {
  onAdd:(product: TypeInputs) => void
  categories: CategoryType[]
}
type TypeInputs = {
    name: string,
    price:  number,
    image: string,
    category: string
}

const ProductAdd = (props: ProductAddProps) => {
    const {register, handleSubmit, formState: {errors} } = useForm<TypeInputs>();
    const navigate = useNavigate();
    const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/duyvqph18088/image/upload";
    const CLOUDINARY_PRESET = "y12jh0jj";
    const onSubmit: SubmitHandler<TypeInputs> = async (data) =>{
      console.log(data)
      const file = data.image[0]
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", CLOUDINARY_PRESET);

      // call api cloudinary
      const response = await axios.post(CLOUDINARY_API, formData, {
          headers: {
              "Content-Type": "application/form-data",
          },
      });
      // console.log({...data, image: response.data.url})
      props.onAdd({...data, image: response.data.url})
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
        <button className="btn btn-primary">Add Product</button>
      </div>
    </form>
  )
}

export default ProductAdd