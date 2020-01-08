
//头部组件  

import React from "react";
import '../style/Head.scss'

//引入字体图标
// import '../assets/iconfont/iconfont.css'

import { Modal, List, Button, WhiteSpace, WingBlank, Icon, Flex } from 'antd-mobile';

import '../assets/font_1600229_ekex9tibk5o/iconfont.css'

// 定义的方法
function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}

class Head extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal1: false,
            modal2: false,
            iconList: [
                {
                    id: Date.now() + 10,
                    icon: "iconfont icon-pengyouquan",
                    title: "朋友圈",
                    color: "#58bc58"
                }, {
                    id: Date.now() + 20,
                    icon: "iconfont icon-weixin",
                    title: "微信好友",
                    color: "green"

                }, {
                    id: Date.now() + 30,
                    icon: "iconfont icon-QQkongjian",
                    title: "QQ空间",
                    color: "yellow"

                }, {
                    id: Date.now() + 40,
                    icon: "iconfont icon-qq",
                    title: "QQ好友",
                    color: "blue"

                }, {
                    id: Date.now() + 50,
                    icon: "iconfont icon-weibo",
                    title: "微博",
                    color: "red"

                }, {
                    id: Date.now() + 60,
                    icon: "iconfont icon-erweima",
                    title: "二维码",
                    color: "purple"

                },
            ]
        };
    }
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    }
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }

    onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
            e.preventDefault();
        }
    }

    render() {
        return (
            <WingBlank>
                {/* <Button onClick={this.showModal('modal1')}><Icon type="up" />basic<Icon type="up" /></Button> */}

                <Modal
                    visible={this.state.modal1}
                    transparent
                    maskClosable={false}
                    onClose={this.onClose('modal1')}
                    title="Title"
                    footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.onClose('modal1')(); } }]}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                // afterClose={() => { alert('afterClose'); }}
                >
                </Modal>

                <div className="nav">
                    <p className="p_1">

                        <span className="span_1 iconfont icon-jiantou2"></span>
                        <span className="span_2">返回</span>

                    </p>
                    <div className="p_2">
                        <span onClick={this.showModal('modal2')}>二手房车</span>
                        <i className=" i_1 iconfont icon-jiantou-copy-copy"></i>
                    </div>
                    <p className="p_3">首页</p>
                </div>


                <Modal
                    popup
                    visible={this.state.modal2}
                    onClose={this.onClose('modal2')}
                    animationType="slide-up"
                // afterClose={() => { alert('afterClose'); }}
                >
                    <List renderHeader={() => <div></div>} className="popup-list">
                        <div className="iconList">
                            {this.state.iconList.map((item) => (

                                <dl key={item.id}>
                                    <dt className={item.icon} style={
                                        {
                                            color: item.color,
                                        }
                                    }></dt>

                                    <dd>{item.title}</dd>
                                </dl>
                            ))}</div>

                        <List.Item>
                            <Button type="primary" onClick={this.onClose('modal2')}>取消</Button>
                        </List.Item>
                    </List>
                </Modal>
            </WingBlank>
        );
    }
}



export default Head;