import React from 'react'
import { IProduct } from '../types/product'

type ProductManegerProps = {
  products: IProduct[];
  onRemove: (_id:string) =>void
}

const ProductManeger = (props: ProductManegerProps) => {
  return (
    <div>
      <table>
        <thead>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th></th>
        </thead>
        <tbody>
          {props.products.map((item, index)=>{
            return <tr key={index}>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
              <button onClick={()=> props.onRemove(item._id)}>Remove</button>
            </td>
          </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProductManeger