import React from 'react';
import Header from "../components/Header.js";
import VideoList from "../components/Video-list.jsx";
import AboutUs from "../components/AboutUs.js";
import '../style/Video.scss';
class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        }
        this.selectPage = this.selectPage.bind(this);
        this.yuan = this.yuan.bind(this);
    }
    selectPage(ev) {
        // if (ev.target.value != this.child.state.page) {
        //     this.child.chao(ev.target.value * 1);
        // }
        this.setState({
            page: ev.target.value * 1
        })
    }
    yuan(ref) {
        this.child = ref
    }
    render() {
        return (
            <div className="video">
                <Header>详情</Header>
                <ul className="video-nav clearfix">
                    <li className="fl">车型</li>
                    <li className="fl">旅行</li>
                    <li className="fl">其它</li>
                </ul>
                <div className="line"></div>
                <VideoList page={this.state.page} onRef={this.yuan}></VideoList>
                <div className="page">
                    <span className="pa">上一页</span>
                    <div className="page-select">
                        <select id="dumppage" onClick={this.selectPage.bind(this)}>
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
                    <span className="pa">下一页</span>
                </div>
                <AboutUs />
                <div className="footer"></div>
            </div>
        );
    }
}
export default Video;