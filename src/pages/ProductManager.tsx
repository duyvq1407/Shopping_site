import { Space, Table } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import { IProduct } from '../types/product'

type ProductManegerProps = {
  products: IProduct[];
  onRemove: (_id:string) =>void
}

const ProductManeger = (props: ProductManegerProps) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a><Link to={`/admin/products/${record._id}/edit`}>Edit</Link></a>
          <a><button onClick={()=> props.onRemove(record._id)}>Remove</button></a>
        </Space>
      ),
    },
  ];
  
  const data = props.products;
  // [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park',
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sidney No. 1 Lake Park',
  //   },
  // ];
  
  return (
    <div>
      <Table dataSource={data} columns={columns} />
    </div>
  )
}

export default ProductManeger