import React from 'react';
import axios from 'axios';
import { Input, Button, message } from 'antd';
import { List, Typography } from 'antd';
import { Divider } from 'antd';
import './Atm.css';

export default class Tmessage extends React.Component {
    constructor(props) {
        super(props);
        //私有的数据
        this.state = {
            data: ''
        }
    }
    data1 = [];
    data2 = [];
    add() {
        this.data1 = [];
        this.data2 = [];
        let y = this.refs.i1.input.value.trim();
        if (y) {
            axios.get(`http://localhost:8888/atm?userID=${y}`).then(({ data }) => {
                if (data == 0) {
                    message.warning('此工号不存在');
                    return;
                }
                if (data.length) {
                    console.log(data);

                    this.setState({ data });//将后端传上来的数据传到私有的数据
                }
            });
        } else {
            message.warning('请输入内容', 1);
        }
    }

    render() {
        //获取私有的数据
        let arr = this.state.data;

        if (arr.length) {
            //基本信息
            let index1 = 0;
            let arrtitle1 = ['学号：', '性别：', '出生年份：', '学历：', '级别：', '入职年份：', '学院：', '姓名：'];
            delete arr[0].url;//删除属性以及属性值
            for (let i in arr[0]) {//将数据push到data1中
                this.data1.push(arrtitle1[index1] + arr[0][i]);
                index1++;
            }
            this.data1.unshift(this.data1[7]);
            this.data1.pop();


            //课程信息
            delete arr[1].teacherID;//将对象的teacherID属性删掉
            delete arr[1].userName;//将对象的userName属性删掉
            let index2 = 0;
            let arrtitle2 = ['课程号：', '科目：', '上课时间：', '地点：', '上课周数：', '类型：', '学分：', '姓名：'];
            for (let i in arr[1]) {
                this.data2.push(arrtitle2[index2] + arr[1][i]);
                index2++;
            }

            return (
                <div className="atm">
                    <Divider><h3>查看教师信息</h3></Divider>
                    <div className="d1 clearfix">
                        <Input allowClear placeholder="请输入工号" ref="i1" />
                        <Button type="primary" onClick={this.add.bind(this)}>查找</Button>
                    </div>
                    <div className="d2 fl">
                        <List
                            size="small"
                            header={<div className="title">基本信息</div>}
                            bordered
                            dataSource={this.data1}
                            renderItem={item => <List.Item>{item}</List.Item>}
                        />
                    </div>
                    <div className="d2 fl">
                        <List
                            size="small"
                            header={<div className="title">课程信息</div>}
                            bordered
                            dataSource={this.data2 ? this.data2 : ''}
                            renderItem={item => <List.Item>{item}</List.Item>}
                        />
                    </div>
                </div>
            )
        } else {
            return (
                <div className="atm">
                    <Divider><h3>查看教师信息</h3></Divider>
                    <Input allowClear placeholder="请输入工号" ref="i1" />
                    <Button type="primary" onClick={this.add.bind(this)}>查找</Button>
                </div>
            )
        }

    }
}