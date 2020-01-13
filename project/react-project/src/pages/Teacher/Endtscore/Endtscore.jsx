import React from 'react';
import axios from 'axios';
import { Table, Divider, Tag } from 'antd';

const columns = [
    {
        title: '学号',
        dataIndex: 'userID',
        key: 'userID',
        align: 'center'
    },
    {
        title: '姓名',
        dataIndex: 'userName',
        key: 'userName',
        align: 'center'
    },
    {
        title: '科目',
        dataIndex: 'courseName',
        key: 'courseName',
        align: 'center'
    },
    {
        title: '类型',
        key: 'courseType',
        dataIndex: 'courseType',
        align: 'center'
    },
    {
        title: '学院',
        dataIndex: 'college',
        key: 'college',
        align: 'center'
    },
    {
        title: '最终得分',
        dataIndex: 'mark',
        key: 'mark',
        align: 'center'
    },
];

export default class Tscore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    data = [];
    componentWillMount() {
        let userID = sessionStorage.getItem("userID");
        axios.get(`http://localhost:8888/tscore?teacherID=${userID}&panduan=1`).then(({ data }) => {
            let arr = data.map(function (item, index) {
                item.key = `${index + 1}`;
                return item;
            });
            this.setState({ data: arr });
        });
    }
    render() {
        let arr = this.state.data;
        if (arr) {
            this.data = arr;
            return (
                <>
                    <Divider><h3>最终评分</h3></Divider>
                    <Table size="small" bordered="true" columns={columns} dataSource={this.data} />
                    {/* <table>
                        <thead>
                            <tr>
                                <th>学号：</th>
                                <th>姓名：</th>
                                <th>科目：</th>
                                <th>类型：</th>
                                <th>学院：</th>
                                <th>最终得分</th>
                            </tr>
                        </thead>
                        <tbody>
                            {arr.map(function (item, index) {
                                return <tr key={index}>
                                    <td>{item.userID}</td>
                                    <td>{item.userName}</td>
                                    <td>{item.courseName}</td>
                                    <td>{item.courseType}</td>
                                    <td>{item.college}</td>
                                    <td>{item.mark}</td>
                                </tr>;
                            })}
                        </tbody>
                    </table> */}
                </>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}