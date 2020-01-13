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

    // componentWillMount() {
    //     var userID = sessionStorage.getItem("userID");
    //     axios.get(`http://localhost:8888/tcourse?teacherID=${userID}`).then(({ data }) => {
    //         this.setState({ data: data });
    //         // console.log(this.state.data);
    //     })
    // }

    add() {
        let userName = this.refs.i1.input.value;
        let userID = this.refs.i2.input.value;
        let sex = this.refs.i3.input.value;
        let birthyear = this.refs.i4.input.value;
        let grade = this.refs.i5.input.value;
        let college = this.refs.i6.input.value;
        // console.log(userName, userID, sex, birthyear, grade, college);

        axios.get(`http://localhost:8888/axuehao?userName=${userName}&userID=${userID}&sex=${sex}&birthyear=${birthyear}&grade=${grade}&college=${college}`).then(({ data }) => {
            if (data * 1) {
                message.warning('此学号已存在');
            } else {
                message.success('添加成功');
            }
        });

        // this.refs.i6.input.value = '';
    }

    // xuehao() {
    //     let userID = this.refs.i2.input.value;
    //     axios.get(`http://localhost:8888/axuehao?userID=${userID}`).then(({ data }) => {
    //         // this.setState({ data: data });
    //         if (data.length){

    //         }else{
    //onBlur = { this.xuehao.bind(this) }
    //         }
    //     })
    // }

    render() {
        return (
            <div className="addstudent">
                <div className="biaoti fl">
                    添<br />加<br />学<br />生
                </div>
                <div className="addstudent fl">
                    <Input placeholder="姓名" allowClear ref="i1" />
                    <Input placeholder="学号" allowClear ref="i2" />
                    <Input placeholder="性别" allowClear ref="i3" />
                    <Input placeholder="出生年份" allowClear ref="i4" />
                    <Input placeholder="入学年份" allowClear ref="i5" />
                    <Input placeholder="学院" allowClear ref="i6" />
                    <Button type="primary" onClick={this.add.bind(this)}>确实添加</Button><span className="tishi"> * 密码默认为123</span>
                </div>
            </div>);
    }
}