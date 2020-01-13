import React from 'react';
import axios from 'axios';
import './Score.css';
import { Table, Divider, Tag } from 'antd';
const columns = [
    {
        title: '课程名称',
        dataIndex: 'courseName',
        key: 'courseName',
        // render: text => <a>{text}</a>,
        // align: 'center'
    },
    {
        title: '课程类型',
        dataIndex: 'courseType',
        key: 'courseType',
    },
    {
        title: '讲师',
        key: 'userName',
        dataIndex: 'userName',
    },
    {
        title: '学分',
        dataIndex: 'score',
        key: 'score',
    },
    {
        title: '最终得分',
        dataIndex: 'mark',
        key: 'mark',
    },
];

export default class Didcourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pagination: {
                pageSize: 4,
            },
        }
    }
    data = [];
    componentWillMount() {
        columns.forEach((item, index) => {
            item.align = 'center'
        })
        let _ = this;
        var userID = sessionStorage.getItem("userID");
        axios.get(`http://localhost:8888/score?studentID=${userID}`).then(({ data }) => {
            let arr = data.map(function (item, index) {
                item.key = `${index + 1}`;
                return item;
            });
            this.setState({ data: arr });
        })
    }
    render() {
        let arr = this.state.data;
        if (arr) {
            this.data = arr;
            console.log(this.data);

            return (
                <div className="score">
                    <Divider><h3>已选课程</h3></Divider>
                    <Table pagination={this.state.pagination} bordered="true" columns={columns} dataSource={this.data} />
                </div>)
        } else {
            return (<ul>
                <p>156</p>
            </ul>);
        }
    }
}