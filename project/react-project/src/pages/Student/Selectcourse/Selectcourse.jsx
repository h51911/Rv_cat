import React from 'react';
import axios from 'axios';
import './Selectcourse.css'
import { message, Button } from 'antd';
import { Table, Divider, Tag } from 'antd';


const columns = [
    {
        title: '课程名称',
        dataIndex: 'courseName',
        key: 'courseName',
    },
    {
        title: '上课时间',
        key: 'courseTime',
        dataIndex: 'courseTime',
    },
    {
        title: '课程类型',
        dataIndex: 'courseType',
        key: 'courseType',
    },
    {
        title: '上课周数',
        dataIndex: 'courseWeek',
        key: 'courseWeek',
    },
    {
        title: '学分',
        dataIndex: 'score',
        key: 'score',
    },
    {
        title: '讲师',
        dataIndex: 'userName',
        key: 'userName',
    },
];

export default class Selectcourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            courseID: 0,
            pan: false,
            pagination: {
                pageSize: 4,
            },
            pan2: false,

        }
    }
    data = [];
    componentWillMount() {
        columns.forEach((item, index) => {
            item.align = 'center'
        })
        axios.get(`http://localhost:8888/course`).then(({ data }) => {
            let arr = data.map(function (item, index) {
                item.key = `${index + 1}`;
                return item;
            });
            this.setState({ data: arr });
        });
    }
    selectKe() {
        if (this.state.pan2) {
            if (this.state.pan) {//判断有无已选的课程
                let courseID = this.state.courseID;
                let userID = sessionStorage.getItem("userID");
                let mark = 0;
                axios.get(`http://localhost:8888/insertcourse?courseID=${courseID}&userID=${userID}&mark=${mark}&yuan=1`).then(({ data }) => {
                    if (data.affectedRows) {
                        message.success('选课成功');
                    }
                });
            } else {
                message.warning('此课程已选');
            }
        } else {
            message.warning('请选择');
        }
    }
    rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            this.setState({ pan2: true });
            let courseID = selectedRows[0].courseID;
            let userID = sessionStorage.getItem("userID");
            axios.get(`http://localhost:8888/insertcourse?courseID=${courseID}&userID=${userID}&yuan=0`).then(({ data }) => {
                if (data.length == 0) {//如果可以查得到数据，则是pan变true
                    this.state.pan = true;
                    this.setState({ courseID });
                } else {
                    this.state.pan = false;
                }
            });
        },
        getCheckboxProps: record => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
        type: 'radio',
    };
    render() {
        let arr = this.state.data;
        let _ = this;
        if (arr) {
            this.data = arr;
            console.log(this.data);
            return <div className="selectcourse">
                <Divider><h3>选课</h3></Divider>
                <Table pagination={this.state.pagination} bordered rowSelection={this.rowSelection} columns={columns} dataSource={this.data} />
                <Button type="primary" onClick={this.selectKe.bind(this)}>确定选课</Button>
            </div>;
        } else {
            return (<ul>
                <p></p>
            </ul>);
        }
    }
}