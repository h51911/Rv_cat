import React from "react";
import Head from "../components/head.jsx";
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import "../style/Reg2.scss";
import "../style/font_1599253_v9xfyclsy9b/iconfont.css";
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
class Reg2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            pan: false
        }
        this.login = this.login.bind(this);
        this.user = this.user.bind(this);
        this.pass = this.pass.bind(this);
        this.repass = this.repass.bind(this);
        this.repan = this.repan.bind(this);
        this.yanzheng = this.yanzheng.bind(this);
    }
    login() {
        this.props.history.push('/login2');
    }
    async user(ev) {
        if (ev.target.value.trim()) {//非空判断
            var reg = /^1[3456789]\d{9}$/;
            var isok = reg.test(ev.target.value.trim());//正则判断
            if (isok) {//符合正则
                let { data } = await axios.get('http://localhost:3001/yanzheng', { params: { username: ev.target.value } });
                if (data.length) {//判断是否已注册
                    // ev.target.value = '';//清空,这里的使用为什么会报错
                    this.userdom.value = '';
                    Toast.fail('该号码已注册', 1.5);
                } else {
                    this.setState({
                        username: this.userdom.value
                    });
                    this.repan();
                }
            } else {//不符合正则
                ev.target.value = '';//清空
                this.repan();
                Toast.fail('号码不合法', 1);
            }
        }
    }
    pass(ev) {
        if (ev.target.value.trim()) {//非空判断
            var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;//正则
            var isok = reg.test(ev.target.value.trim());//正则判断
            if (isok) {//符合正则
                this.setState({
                    password: ev.target.value
                });
                this.repan();
            } else {//不符合正则
                ev.target.value = '';//清空
                this.repan();
                Toast.fail('密码至少包含 数字和英文，长度6-20', 2);
            }
        }
    }
    repan() {
        this.setState({
            pan: false
        });
    }
    repass(ev) {
        if (this.state.password.trim()) {
            if (this.state.password == ev.target.value) {
                this.setState({
                    pan: true
                });
            } else {
                this.repan()
                Toast.fail('密码不一致', 1.5);
            }
        } else {
            this.repan()
            Toast.fail('请填写密码', 1);
        }

    }
    async yanzheng() {
        if (this.state.pan) {
            if (this.state.password && this.state.username) {
                let params = { password: this.state.password, username: this.state.username };
                params = qs.stringify(params);
                let { data } = await axios.post('http://localhost:3001/reg', params);
                if (data.insertedCount) {
                    localStorage.setItem("name", this.state.username);
                    this.props.history.push('/mine');
                }
            } else {
                Toast.fail('不能为空', 1);
            }
        } else {
            Toast.fail('请正确输入', 1);
        }

    }
    render() {
        return (
            <div className="reg2">
                {/* 手机注册 */}
                <Head>手机注册</Head>
                <div className="menu">
                    <ul>
                        <li onClick={this.login}><a>手机登录</a></li>
                        <li><a className="current">手机注册</a></li>
                    </ul>
                </div>
                {/* 用户名 */}
                <div className="wqlogin_register">
                    <form>
                        <div className="wqlogin">
                            <ul>
                                <li className="wqb_bottom">
                                    <i className="wqiconfont2 iconfont icon-xingmingyonghumingnicheng wq_f20"></i>
                                    <input ref={(e) => { this.userdom = e }} autoComplete="off" type="text" id="username" placeholder="手机号码" onBlur={this.user} />
                                </li>
                                <li className="wqb_bottom">
                                    <i className="wqiconfont2 iconfont icon-mima wq_f20"></i>
                                    <input autoComplete="off" type="password" id="password" placeholder="密码" onBlur={this.pass} />
                                </li>
                                <li className="wqb_bottom">
                                    <i className="wqiconfont2 iconfont icon-mima1 wq_f20"></i>
                                    <input autoComplete="off" type="password" id="password_2" placeholder="确认密码" onBlur={this.repass} />
                                </li>
                            </ul>
                        </div>
                        <div className="wqm_top10" style={{ fontSize: '12px', color: '#999999' }}>
                            <p>注册即视为同意
                                <a target="_blank" className="hui_underline">用户服务协议</a>
                                和<a target="_blank" className="hui_underline">隐私政策</a>
                            </p>
                        </div>
                        <div className="wqlogin_btn wqm_top10">
                            <button tabIndex="3" id="registersubmit" className="wq_button wqbg_color wq_btn" onClick={this.yanzheng}>验证并登录</button>
                        </div>
                    </form>

                    <div className="wqregister_account">
                        <a className="wqcolor wqfloat_right" onClick={this.login}>马上登录</a>
                    </div>
                </div>
                <div className="footer rv_qjywys">
                    <p className="opt-change">
                        <a>关于我们</a> <em>|</em>
                        <a>联系我们</a> <em>|</em>
                        <a>广告服务</a> <em>|</em>
                        <a>下载APP</a>
                    </p>
                    <div className="copyright">
                        <p className="foot-contact">购车热线：<a>177 4096 2161</a>（微信同号）</p>
                        <p>房车之家 © 2019 www.rv28.com</p>
                    </div>
                </div>
            </div>
        )
    }
}
Reg2 = withRouter(Reg2);
export default Reg2;