import { Space, Table, Image } from 'antd';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { listCate, readCate } from '../../api/category';
import { IProduct } from '../../types/product'
import { CategoryType } from '../../types/category'

type CategoryDetailProps = {
  products: IProduct[];
  onRemove: (_id:string) =>void
}

const CategoryDetail = (props: CategoryDetailProps) => {
  const {id} = useParams();
  const [cateDetail, setCateDetail] = useState(null)
  useEffect(() => {
      const getCategories = async() => {
          const {data} = await readCate(id);
          setCateDetail(data.products)
      }
      getCategories();
  },[])  
  console.log(cateDetail)
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
  
  const data = cateDetail;
  
  return (
    <div>
      <Table dataSource={data} columns={columns} />
    </div>
  )
}

export default CategoryDetail