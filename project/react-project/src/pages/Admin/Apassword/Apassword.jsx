import React from 'react';
import axios from 'axios';
import { Input } from 'antd';
import { Popconfirm, message, Button } from 'antd';
import qs from 'qs';
import './Apassword.css';
import {
    useParams,
    withRouter
} from "react-router-dom";

export default withRouter(class Spassword extends React.Component {
    text = '你确定要修改吗?';
    confirm() {
        let userID = this.refs.i1.input.value.trim();
        let password = this.refs.i2.input.value.trim();
        if (userID && password) {
            let params = { userID, password };
            params = qs.stringify(params);
            axios.post("http://localhost:8888/arepass", params).then(function (data) {
                // console.log(data);
                if (data.data == 0) {//判断有无号码，如果有，直接结束函数执行
                    message.warning('此号码不存在', 1);
                    return;
                }
                if (data.data.affectedRows) {//判断有无改数据库
                    message.success('修改成功', 1);
                } else {
                    message.error('修改失败', 1);
                }
            });
        } else {
            message.warning('请输入信息', 1);
        }
    }
    render() {
        return (
            <div className="aspassword">
                <div className="biaoti fl">
                    修<br />改<br />密<br />码
                </div>
                <div className="fl">
                    <Input placeholder="请输入学号/工号" allowClear ref="i1" />
                    <Input placeholder="新密码" type="password" allowClear ref="i2" />
                    <Popconfirm
                        placement="topRight"
                        title={this.text}
                        onConfirm={this.confirm.bind(this)}
                        okText="是"
                        cancelText="否"
                    >
                        <Button type="primary">确定修改</Button>
                    </Popconfirm>
                </div>
            </div>
        )
    }
});