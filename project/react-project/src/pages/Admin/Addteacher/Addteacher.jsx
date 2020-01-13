import React from 'react';
import axios from 'axios';
import { Input } from 'antd';
import { message, Button } from 'antd';
import './Addstudent.css'
export default class addstudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }
    add() {
        let userName = this.refs.i1.input.value.trim();
        let userID = this.refs.i2.input.value.trim();
        let sex = this.refs.i3.input.value.trim();
        let degree = this.refs.i4.input.value.trim();
        let title = this.refs.i5.input.value.trim();
        let birthyear = this.refs.i6.input.value.trim();
        let grade = this.refs.i7.input.value.trim();
        let college = this.refs.i8.input.value.trim();
        // console.log(userName, userID, sex, degree, title, birthyear, grade, college);
        axios.get(`http://localhost:8888/agonghao?userName=${userName}&userID=${userID}&sex=${sex}&degree=${degree}&title=${title}&birthyear=${birthyear}&grade=${grade}&college=${college}`).then(({ data }) => {
            if (data * 1) {
                message.warning('此学号已存在');
            } else {
                message.success('添加成功');
            }
        });
    }
    render() {
        return (
            <div className="addteacher">
                <div className="biaoti fl">
                    添<br />加<br />教<br />师
                </div>
                <div className="addstudent fl">
                    <Input placeholder="姓名" allowClear ref="i1" />
                    <Input placeholder="工号" allowClear ref="i2" />
                    <Input placeholder="性别" allowClear ref="i3" />
                    <Input placeholder="学历" allowClear ref="i4" />
                    <Input placeholder="教师职称" allowClear ref="i5" />
                    <Input placeholder="出生年份" allowClear ref="i6" />
                    <Input placeholder="毕业年份" allowClear ref="i7" />
                    <Input placeholder="学院" allowClear ref="i8" />
                    <Button type="primary" onClick={this.add.bind(this)}>确实添加</Button><span className="tishi"> * 密码默认为123</span>
                </div>
            </div>);
    }
}