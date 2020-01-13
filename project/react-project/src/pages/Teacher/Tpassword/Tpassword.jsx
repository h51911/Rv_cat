import React from 'react';
import axios from 'axios';
import { Button } from 'antd';
import qs from 'qs';
import './Spassword.css';
import {
    useParams,
    withRouter
} from "react-router-dom";
export default withRouter(class Spassword extends React.Component {
    state = {
        pan: false,
        pan2: false,
    }
    constructor(props) {
        super(props)
    }
    oldpass() {
        let _ = this;
        let password = this.refs.oldpassword.value;
        let userID = sessionStorage.getItem("userID");
        let role = sessionStorage.getItem("role");
        let params = { userID, password, role };
        params = qs.stringify(params);
        axios.post("http://localhost:8888/login", params).then(function (data) {
            if (data.data.length) {
                _.setState({ pan: true });
            } else {
                _.setState({ pan: false });
            }
        });
    }

    pan() {
        let password1 = this.refs.password1.value;
        let password2 = this.refs.password2.value;
        if (password1 == password2) {
            this.refs.password2.nextElementSibling.style.display = 'none';
            this.setState({ pan2: true });
        } else {
            this.refs.password2.nextElementSibling.style.display = 'block';
            this.setState({ pan2: false });
        }
    }

    xiugai() {
        let _ = this;
        if (this.state.pan && this.state.pan2) {
            let password = this.refs.password2.value;
            let userID = sessionStorage.getItem("userID");
            let role = sessionStorage.getItem("role");
            let params = { userID, password, role };
            params = qs.stringify(params);
            axios.post("http://localhost:8888/repass", params).then(function (data) {
                console.log(data);
                if (data.data.affectedRows) {
                    _.props.history.push('/ssuccess')
                } else {

                }
            });
        } else {
            console.log('不能修改密码');
        }
    }

    render() {
        return (
            <div className="spassword">
                <p className="old">原密码</p>
                <input type="password" onBlur={this.oldpass.bind(this)} ref='oldpassword' />
                <p className="reflush">新密码</p>
                <input type="password" ref='password1' />
                <p className="reflush">确认密码</p>
                <div className="clearfix d1">
                    <input className="fl" type="password" onChange={this.pan.bind(this)} ref='password2' />
                    <div className="d1-1 fl">密码不一致</div>
                </div>
                <Button type="primary" onClick={this.xiugai.bind(this)}>确定修改</Button>
            </div>
        )
    }
});