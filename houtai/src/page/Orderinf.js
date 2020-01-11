import React,{Component} from 'react';
import { Table } from 'antd';
import axios from 'axios';
const columns = [
    {
      title: '_ID',
      dataIndex: '_id',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Username',
      dataIndex: 'username',
    },
    {
      title: 'RouteId',
      dataIndex: 'routeId',
    },
    
  ];
  
  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record._id === 'Disabled User', // Column configuration not to be checked
      _id: record._id,
    }),
  };
class Orderinf extends Component{
    state = {
        datalist:[]
    }
    delete = () => {
      console.log(66)
    }
    async componentDidMount() {
        let {datalist} = this.state;
        let {data} = await axios.get('http://localhost:5200/shoping/All');
        // console.log(data)
        // datalist.push(data[0]);
        // console.log(datalist)
        datalist = data;
        this.setState({
            datalist
        })

    }
    render() {
      // console.log(data)
        let {datalist} = this.state;
        return(
            <div>
              {
                datalist.length?<>
                  <Table rowSelection={rowSelection} columns={columns} dataSource={datalist} />
                  {/* <button onClick={this.delete}>删除</button> */}
                </>:<></>
              }
                
            </div>
        )
    }
}

export default Orderinf;