import { Space, Table } from 'antd';
import { Link } from 'react-router-dom';
import { CategoryType } from '../../types/category';

type CategoryManegerProps = {
  categories: CategoryType[];
  onRemove: (_id:string) =>void
}

const CategoryManeger = (props: CategoryManegerProps) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: string, record: any) => (
        <Space size="middle">
          <a><Link to={`/admin/categories/${record._id}/edit`}>Edit</Link></a>
          <a><button onClick={()=> props.onRemove(record._id)}>Remove</button></a>
          <a><Link to={`/admin/categories/${record._id}/view`}>View</Link></a>
        </Space>
      ),
    },
  ];
  
  const data = props.categories;
  
  return (
    <div>
      <Table dataSource={data} columns={columns} />
    </div>
  )
}

export default CategoryManeger