import { Space, Table } from 'antd';
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { listCate, readCate } from '../../api/category';
import { IProduct } from '../../types/product'

type CategoryDetailProps = {
  products: IProduct[];
  onRemove: (_id:string) =>void
}

const CategoryDetail = (props: CategoryDetailProps) => {
  const {id} = useParams();
  useEffect(() => {
      const getCategories = async() => {
          const {data} = await readCate(id);
          console.log(data.products)
      }
      getCategories();
  },[])  
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
  
  return (
    <div>
      <Table dataSource={data} columns={columns} />
    </div>
  )
}

export default CategoryDetail