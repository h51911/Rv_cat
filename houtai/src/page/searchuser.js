import React from 'react'
import { Table } from 'antd'
import axios from 'axios'

class SearchUser extends React.Component {

  state = {
    columns: [
      {
        title: 'username',
        dataIndex: 'username',
      },
      {
        title: 'password',
        dataIndex: 'password',
      },
    ],
    data: [
      {
        key: '1',
        username: 'John Brown',
        password: 32,

      },
      {
        key: '2',
        username: 'Jim Green',
        password: 42,

      },
      {
        key: '3',
        username: 'Joe Black',
        password: 32,
      },
    ]
  }

  async componentDidMount() {
    let { data } = await axios.get('http://localhost:3001/luo/login')
    console.log(data)

    this.setState({
      data
    })
  }
  render() {

    let { columns, data } = this.state
    return (<div>

      <Table columns={columns} dataSource={data} size="middle" />

    </div>)
  }
}

export default SearchUser