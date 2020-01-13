import React from 'react';
import axios from 'axios';
import { Comment, Avatar, Form, Button, List, Input, message, Divider } from 'antd';
import { Icon, Tooltip } from 'antd';
import moment from 'moment';
import { Pagination } from 'antd';
const { TextArea } = Input;
export default class Tacomment extends React.Component {
    state = {
        likes: 0,
        dislikes: 0,
        action: null,
        data: []
    }
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
        var teacherID = sessionStorage.getItem("userID");
        let _ = this;
        axios.get(`http://localhost:8888/tcomment?teacherID=${teacherID}&id=2`).then(({ data }) => {
            _.setState({ data });
        });
    }
    render() {
        const { likes, dislikes, action } = this.state;
        let arr = this.state.data;
        console.log(this.state.data);
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
        if (arr.length) {
            return (<div>
                <Divider>学生评价查看</Divider>
                {arr.map((item, index) => {
                    return (<Comment
                        author={<a>{item.student}</a>}
                        avatar={
                            <Avatar
                                src={item.url}
                                alt="Han Solo"
                            />
                        }
                        content={
                            <p>
                                {item.text}
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
            </div>);
        } else {
            return (<div>
                <Divider>学生评价查看</Divider>
            </div>);
        }
    }
}