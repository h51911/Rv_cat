import React from 'react';
import axios from 'axios';
import './Smessage.css';
import { Divider } from 'antd';
export default class Smessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }
    componentWillMount() {
        let userID = sessionStorage.getItem("userID");
        axios.get(`http://localhost:8888/smessage?userID=${userID}`).then(({ data }) => {
            console.log(data);
            this.setState({ data: data[0] });
        });
    }
    render() {
        return (
            <div className="smessage">
                <Divider><h3>学生信息</h3></Divider>
                <div className="img fl">
                    <img src={this.state.data.url ? this.state.data.url : 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=188149577,2949073731&fm=26&gp=0.jpg'} alt="" />
                </div>
                <div className="text fl">
                    <p>姓名：{this.state.data.userName}</p>
                    <p>学号：{this.state.data.userID}</p>
                    <p>性别：{this.state.data.sex}</p>
                    <p>出生年份：{this.state.data.birthyear}</p>
                    <p>入学年份：{this.state.data.grade}</p>
                    <p>院系：{this.state.data.college}</p>
                </div>
            </div>
        )
    }
}