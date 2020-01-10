import React from "react";
import Head from "../components/head.jsx";
import "../style/Login2.scss";
import "../style/font_1599253_v9xfyclsy9b/iconfont.css";
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
class Login2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.reg = this.reg.bind(this);
        this.user = this.user.bind(this);
        this.pass = this.pass.bind(this);
        this.yanzheng = this.yanzheng.bind(this);
    }
    reg() {
        this.props.history.push('/reg2');
    }
    user(ev) {
        this.setState({
            username: ev.target.value
        });
    }
    pass(ev) {
        this.setState({
            password: ev.target.value
        });
    }
    async yanzheng() {
        if (this.state.password && this.state.username) {
            let params = { password: this.state.password, username: this.state.username };
            params = qs.stringify(params);
            let { data } = await axios.post('http://localhost:3001/login', params);
            if (data.length) {
                localStorage.setItem("name", this.state.username);
                this.props.history.push('/mine');
            } else {
                Toast.fail('手机号码或密码错误', 1);
            }
        } else {
            Toast.fail('不能为空', 1);
        }
    }
    render() {
        return (
            <div className="login2">
                {/* top */}
                <Head>手机登录</Head>
                {/* 手机登录 */}
                <div className="menu">
                    <ul>
                        <li><a className="current">手机登录</a></li>
                        <li onClick={this.reg}><a>手机注册</a></li>
                    </ul>
                </div>
                {/* 表单 */}
                <div className="wqlogin_register">
                    <form>
                        <div className="wqlogin">
                            <ul>
                                <li className="wqb_bottom">
                                    <i className="wqiconfont2 iconfont icon-iLinkapp- wq_f22"></i>
                                    <input onChange={this.user} value={this.state.username} type="text" id="mobile_num1" className="wqphone" placeholder="手机号码" maxLength="11" />
                                </li>
                                <li className="wqb_bottom">
                                    <i className="wqiconfont2 iconfont icon-kaifangpingtai-xiugaimimachenggong wq_f22"></i>
                                    <input onChange={this.pass} value={this.state.password} id="phone_password" type="password" placeholder="密码" />
                                </li>
                            </ul>
                        </div>
                        <div className="wqm_top10" style={{ fontSize: '12px', color: '#999999' }}>
                            <p>登录即视为同意
                                 <a target="_blank" className="hui_underline">用户服务协议</a> 和
                                <a target="_blank" className="hui_underline">隐私政策</a>
                            </p>
                        </div>
                        <div className="wqlogin_btn wqm_top10">
                            <button tabIndex="3" id="loginsubmit" className="wq_button wqbg_color wq_btn" onClick={this.yanzheng}>验证并登录</button>
                        </div>
                    </form>

                    <div className="wqregister_account">
                        <a className="wqcolor wq_liregister" onClick={this.reg}>立即注册</a>
                        <a className="wqcolor wqfloat_right">找回密码</a>
                    </div>
                </div>
                {/* 底部 */}
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
Login2 = withRouter(Login2)
export default Login2;