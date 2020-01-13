import React from 'react';
import {
    useParams,
    withRouter
} from "react-router-dom";
import "./Ssuccess.css";
export default withRouter(class Ssuccess extends React.Component {
    constructor(props) {
        super(props)
    }
    backLogin() {
        console.log(this);
        this.props.history.push('/menu');
    }
    render() {
        return (
            <div className="ssuccess">
                <h3>修改成功</h3>
                <p onClick={this.backLogin.bind(this)}>返回登录页面</p>
            </div>
        );
    }
});