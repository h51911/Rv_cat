import React from 'react';
import axios from 'axios';
import { Table, Divider, Tag } from 'antd';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './Scomment.css';



export default class Scomment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        let _ = this;
        var userID = sessionStorage.getItem("userID");
        axios.get(`http://localhost:8888/selectcourse?studentID=${userID}`).then(({ data }) => {
            let arr = data.map(function (item, index) {
                item.key = `${index + 1}`;
                return item;
            });
            this.setState({ data: arr });
        });
    }

    yuan(item) {
        sessionStorage.setItem("teacherID", item.teacherID);
        sessionStorage.setItem("userName", item.userName);
    }

    render() {
        let arr = this.state.data;
        let _ = this;
        if (arr) {
            return (
                <div className="scomment">
                    <table>
                        <thead>
                            <tr>
                                <th>姓名</th>
                                <th>科目</th>
                                <th>评价</th>
                            </tr>
                        </thead>
                        <tbody>
                            {arr.map(function (item, index) {
                                return <tr key={index}>
                                    <td>{item.userName}</td>
                                    <td>{item.courseName}</td>
                                    <td onClick={() => { _.yuan(item) }}><Link to="/alayout/sacomment">评价</Link></td>
                                </tr>;
                            })}
                        </tbody>
                    </table>
                </div>)
        } else {
            return (<div></div>)
        }

    }
}