import React from 'react';
import axios from 'axios';
import { Comment, Avatar, Form, Button, List, Input, message, Divider } from 'antd';
import { Icon, Tooltip } from 'antd';
import moment from 'moment';
import { Pagination } from 'antd';
const { TextArea } = Input;
const i1 = require('./1.jpg');
// import i1 from './1.jpg';
export default class Sacomment extends React.Component {
    state = {
        likes: 0,
        dislikes: 0,
        action: null,
        data: [{ text: '' }],
        imgurl: [i1]
    };
    like = () => {
        this.setState({
            likes: 1,
            dislikes: 0,
            action: 'liked',
        });
    };
    dislike = () => {
        this.setState({
            likes: 0,
            dislikes: 1,
            action: 'disliked',
        });
    };
    componentWillMount() {
        var studentID = sessionStorage.getItem("userID");
        var teacherID = sessionStorage.getItem("teacherID");
        let _ = this;
        axios.get(`http://localhost:8888/scomment?studentID=${studentID}&teacherID=${teacherID}&id=2`).then(({ data }) => {
            console.log(data);
            _.setState({ data });
        });
    }
    yuan() {
        let text = this.refs.text.resizableTextArea.textArea.value;
        if (text) {
            var studentID = sessionStorage.getItem("userID");
            var teacherID = sessionStorage.getItem("teacherID");
            let _ = this;
            axios.get(`http://localhost:8888/scomment?studentID=${studentID}&teacherID=${teacherID}&text=${text}&id=1`).then(({ data }) => {
                if (data.affectedRows) {
                    _.componentWillMount();
                } else {
                    message.error('评论失败', 2);
                }
            });
        } else {
            message.warning('请填写内容', 2);
        }
    }
    render() {
        var teacherID = sessionStorage.getItem("teacherID");
        const { likes, dislikes, action } = this.state;
        const actions = [
            <span key="comment-basic-like">
                <Tooltip title="Like">
                    <Icon
                        type="like"
                        theme={action === 'liked' ? 'filled' : 'outlined'}
                        onClick={this.like}
                    />
                </Tooltip>
                <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
            </span>,
            <span key=' key="comment-basic-dislike"'>
                <Tooltip title="Dislike">
                    <Icon
                        type="dislike"
                        theme={action === 'disliked' ? 'filled' : 'outlined'}
                        onClick={this.dislike}
                    />
                </Tooltip>
                <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
            </span>,
            <span key="comment-basic-reply-to">Reply to</span>,
        ];
        if (teacherID) {
            return <div className="sacomment">
                <Divider>{sessionStorage.getItem("userName")}老师</Divider>
                <Form.Item>
                    <TextArea rows={4} allowClear ref="text" />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" type="primary" onClick={this.yuan.bind(this)}>评价</Button>
                </Form.Item>
                {this.state.data.map((Item, index) => {
                    return (<Comment
                        author={<a>{Item.userName}</a>}
                        avatar={
                            <Avatar
                                src={Item.url}
                                alt="Han Solo"
                            />
                        }
                        content={
                            <p>
                                {Item.text}
                            </p>
                        }
                        datetime={
                            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                <span>{moment().fromNow()}</span>
                            </Tooltip>
                        }
                        key={index}
                    />)
                })}
            </div>
        } else {
            return <div></div>
        }
    }
}