import React from 'react';
import axios from 'axios';
import './Tscore.css';
import { message } from 'antd';
export default class Tscore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentWillMount() {
        let userID = sessionStorage.getItem("userID");
        axios.get(`http://localhost:8888/tscore?teacherID=${userID}&panduan=0`).then(({ data }) => {
            this.setState({ data });
        });
    }

    tijiao(index) {
        let _ = this;
        let arr = this.state.data;
        let stuID = arr[index].userID;
        let courseID = arr[index].courseID;
        let shuvalue = this.refs[`shu${index}`].innerHTML
        // console.log(stuID, shuvalue, courseID);
        if (shuvalue) {
            axios.get(`http://localhost:8888/tpingfeng?courseID=${courseID}&studentID=${stuID}&mark=${shuvalue}`).then(({ data }) => {
                // this.setState({ data });
                console.log(data);
                if (data.affectedRows) {
                    message.success('评分成功');
                    _.refs[`shu${index}`].innerHTML = '';
                    _.componentWillMount();
                }
            });
        } else {
            message.warning('请输入分数!');
        }
    }
    render() {
        let arr = this.state.data;
        console.log(arr);

        if (arr) {
            let _ = this
            return (
                <table className="tscore">
                    <thead>
                        <tr>
                            <th>学号：</th>
                            <th>姓名：</th>
                            <th>科目：</th>
                            <th>类型：</th>
                            <th>学院：</th>
                            <th className="feng">评分</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arr.map(function (item, index) {
                            return <tr key={index}>
                                <td>{item.userID}</td>
                                <td>{item.userName}</td>
                                <td>{item.courseName}</td>
                                <td>{item.courseType}</td>
                                <td>{item.college}</td>
                                <td><div ref={`shu${index}`} className="fl shu" contenteditable="true"></div><bottom className="fr" onClick={() => { _.tijiao(index) }}>提交</bottom></td>

                            </tr>;
                        })}
                    </tbody>
                </table>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}