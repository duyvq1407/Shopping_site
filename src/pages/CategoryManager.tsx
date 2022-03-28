import { Space, Table } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import { IProduct } from '../types/product'

type CategoryManegerProps = {
  products: IProduct[];
  onRemove: (_id:string) =>void
}

const CategoryManeger = (props: CategoryManegerProps) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
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
  
  return (
    <div>
      <Table dataSource={data} columns={columns} />
    </div>
  )
}

export default CategoryManeger