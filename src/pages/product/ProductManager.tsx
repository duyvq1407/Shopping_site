import { Space, Table, Image } from 'antd';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { listCate } from '../../api/category';
import { CategoryType } from '../../types/category';
import { IProduct } from '../../types/product'

type ProductManegerProps = {
  products: IProduct[];
  onRemove: (_id:string) =>void
}

const ProductManeger = (props: ProductManegerProps) => {
  const [category, setCategory] = useState<CategoryType[]>()
  useEffect(() => {
      const getCategory = async() =>{
        const {data: category} = await listCate()
        setCategory(category)
      }
      getCategory()
  },[])
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text : string) => <a>{text}</a>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (text : string) => <a>{category && category.map(item => {if(item._id == text){return item.name}} )}</a>,
    },
    {
      title: 'Image',
      key: 'Image',
      render: (text : string, record: any) => (
        <Space size="middle">
          <Image src={record.image} alt="" height={100} />
        </Space>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text : string, record: any) => (
        <Space size="middle">
          <Link to={`/admin/products/${record._id}/edit`}>Edit</Link>
          <button onClick={()=> props.onRemove(record._id)}>Remove</button>
        </Space>
      ),
    },
  ];
  const data = props.products.map((item: IProduct, index) => {
    return {
      key: index + 1,
      name: item.name,
      category: item.category,
      price: item.price,
      image: item.image,
      _id: item._id
    }
  });
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