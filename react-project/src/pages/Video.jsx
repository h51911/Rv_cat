import React from 'react';
import Head from "../components/head.jsx";
import VideoList from "../components/Video-list.jsx";
import AboutUs from "../components/AboutUs.js";
import '../style/Video.scss';
import { Route, Link, NavLink, Switch, Redirect, withRouter } from 'react-router-dom';
class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        }
        this.selectPage = this.selectPage.bind(this);
        this.yuan = this.yuan.bind(this);
        this.downPage = this.downPage.bind(this);
        this.upPage = this.upPage.bind(this);
    }
    //选择页数的方法
    selectPage(ev) {
        // console.log(ev.target.value);
        if (ev.target.value != this.child.state.page) {
            this.setState({
                page: ev.target.value * 1
            });

            console.log('ev.target:', ev.target.value * 1);
            console.log('this.state.page', this.state.page);

            this.child.chao(ev.target.value * 1);//此方法是子组件的方法
            //以下逻辑是，点击页数，判断按钮是否高亮的
            if (ev.target.value == 5) {
                this.refs.down.setAttribute('style', 'color:#9C9C9C');
                this.refs.up.setAttribute('style', null);
            } else if (ev.target.value == 1) {
                this.refs.up.setAttribute('style', 'color:#9C9C9C');
                this.refs.down.setAttribute('style', null);
            } else {
                this.refs.down.setAttribute('style', null);
                this.refs.up.setAttribute('style', null);
            }
        }
    }
    upPage(ev) {
        if (this.state.page != 1) {
            let page = --this.state.page;
            this.setState({
                page
            });
            this.select.value = page
            this.child.chao(page);

            //点击上一页，清除 下一页按钮的样式
            this.refs.down.setAttribute('style', null);
            //点击上一页，如果回到第1页了，就设置上一页按钮的样式，也就是不能再点击了
            if (page == 1) {
                ev.target.setAttribute('style', 'color:#9C9C9C');
            }
        }
    }
    //下一页
    downPage(ev) {
        if (this.state.page != 5) {
            let page = this.state.page + 1;
            this.setState({
                page
            });
            this.select.value = page
            this.child.chao(page);

            console.log('this.state.page', this.state.page);//2

            //点击下一页，清除 上一页按钮的样式
            this.refs.up.setAttribute('style', null);
            //点击下一页，如果回到第5页了，就设置下一页按钮的样式，也就是不能再点击了
            if (page == 5) {
                ev.target.setAttribute('style', 'color:#9C9C9C');
            }
        }
    }
    //子组件调用此方法，将子组件的实例传到ref中
    yuan(ref) {
        this.child = ref//将子组件的实例存到父组件实例下的child中，此时就可以调用子组件的方法了
    }
    componentDidMount() {
        this.refs.up.setAttribute('style', 'color:#9C9C9C');
    }
    render() {
        return (
            <div className="video">
                <Head>列表页</Head>
                <ul className="video-nav clearfix">
                    <li className="fl">车型</li>
                    <li className="fl">旅行</li>
                    <li className="fl">其它</li>
                </ul>
                <div className="line"></div>
                <VideoList page={this.state.page} onRef={this.yuan}></VideoList>
                <div className="page">
                    <span onClick={this.upPage} ref="up" className="pa">上一页</span>
                    <div className="page-select">
                        <select id="dumppage" ref={(e) => { this.select = e }} onClick={this.selectPage.bind(this)}>
                            <option value="1">第1页</option>
                            <option value="2">第2页</option>
                            <option value="3">第3页</option>
                            <option value="4">第4页</option>
                            <option value="5">第5页</option>
                        </select>
                        <i>
                            <span className="sanjiaoxing iconfont icon-sanjiaoxing"></span>
                        </i>
                    </div>
                    <span onClick={this.downPage} ref="down" className="pa">下一页</span>
                </div>
                <AboutUs />
                <div className="footer"></div>
            </div>
        );
    }
}
export default Video;