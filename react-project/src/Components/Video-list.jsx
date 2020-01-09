import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],
            data: [],
            page: 1
        }
        //this.props.onRef是父组件传下来的方法，
        this.props.onRef(this)//这里是调用父组件的方法，并且将子组件的实例传到父组件中
        this.xiangqing = this.xiangqing.bind(this);
        this.chao = this.chao.bind(this);
    }
    async componentDidMount() {
        let shu = 12 * this.props.page;
        let { data } = await axios.get('http://localhost:3001/video');
        this.setState({
            datas: data,
            data: data.slice(shu - 12, shu)
        });
    }
    xiangqing(vid) {
        this.props.history.push(`/video/xiang/${vid}`);
    }
    chao(page) {
        let shuX = 12 * page;
        this.setState({
            page,
            data: this.state.datas.slice(shuX - 12, shuX)
        });
    }
    render() {
        window.scrollTo(0, 0);
        return (
            <>
                <main>
                    <h3>
                        视频
                    </h3>
                    <ul className="clearfix">
                        {
                            this.state.data.map((item, index) => {
                                return (
                                    <li className="fl" key={item.title} onClick={this.xiangqing.bind(this, item.vid)}>
                                        <div className="d-img">
                                            <span className="bofang iconfont icon-bofang"></span>
                                            <img src={item.src} alt="" />
                                        </div>
                                        <p>{item.title}</p>
                                        <div className="bottom">
                                            <span className="bofang iconfont icon-bofang"></span>
                                            <i> {item.bofang}</i>
                                            <span className="dkw_xiaoxi iconfont icon-dkw_xiaoxi"></span>
                                            <i> {item.msg}</i>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </main>
            </>
        );
    }
}
VideoList = withRouter(VideoList);
export default VideoList;