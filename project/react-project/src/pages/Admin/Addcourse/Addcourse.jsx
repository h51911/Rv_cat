import React from 'react';
import axios from 'axios';
import { Input } from 'antd';
import { message, Button } from 'antd';
export default class Tscore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    add() {
        let userName = this.refs.i1.input.value;
        let teacherID = this.refs.i2.input.value;
        let courseName = this.refs.i3.input.value;
        let courseTime = this.refs.i4.input.value;
        let classRoom = this.refs.i5.input.value;
        let courseWeek = this.refs.i6.input.value;
        let courseType = this.refs.i7.input.value;
        let score = this.refs.i8.input.value;
        if (userName && teacherID && courseName && courseTime && classRoom && courseWeek && courseType && score) {
            axios.get(`http://localhost:8888/acourse?userName=${userName}&teacherID=${teacherID}&courseName=${courseName}&courseTime=${courseTime}&classRoom=${classRoom}&courseWeek=${courseWeek}&courseType=${courseType}&score=${score}`).then(({ data }) => {
                if (data * 1) {
                    message.success('添加成功');
                } else {
                    message.warning('添加失败，工号不存在，或者工号与教师姓名不匹配');
                }
            });
        } else {
            message.warning('输入框不能为空');
        }
    }
    render() {
        return (
            <div className="addstudent">
                <div className="biaoti fl">
                    添<br />加<br />课<br />程
                </div>
                <div className="addstudent fl">
                    <Input placeholder="教师姓名" allowClear ref="i1" />
                    <Input placeholder="工号" allowClear ref="i2" />
                    <Input placeholder="课程名称" allowClear ref="i3" />
                    <Input placeholder="上课时间" allowClear ref="i4" />
                    <Input placeholder="上课地点" allowClear ref="i5" />
                    <Input placeholder="上课周数" allowClear ref="i6" />
                    <Input placeholder="类型" allowClear ref="i7" />
                    <Input placeholder="学分" allowClear ref="i8" />
                    <Button type="primary" onClick={this.add.bind(this)}>确实添加</Button><span className="tishi"> * 姓名与工号一定要匹配</span>
                </div>
            </div>);
    }
}