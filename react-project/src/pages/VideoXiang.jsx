import React from 'react';
import Head from "../components/head.jsx";
import '../style/VideoXiang.scss';
import axios from 'axios';
class VideoXiang extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                poster: '',
                videosrc: '',
                title: ''
            }]
        }
    }
    async componentDidMount() {
        var id = this.props.match.params.id * 1;
        id = id % 5;
        if (id == 0) {
            id = 5;
        }
        let { data } = await axios.get('http://localhost:3001/videoxiang', { params: { id } });
        console.log(data);

        // let data = [
        //     {
        //         poster: "https://www.rv28.com/data/attachment/portal/202001/06/214816fylpt0h4wnne4y4u.jpg.thumb.jpg",
        //         videosrc: "https://v.rv28.com/video/妹子探访宇通工厂，体验了10.98万的房车，园区内路试表现如何？.mp4",
        //         title: "妹子探访宇通工厂，体验了10.98万的房车，园区内路试表现如何？ ..."
        //     }
        // ];

        this.setState({
            data
        });
    }
    render() {
        let data = this.state.data[0]
        return (
            <div className="videoxiang">
                <Head>详情</Head>
                <div className="video">
                    <video
                        controls
                        poster={data.poster}
                        src={data.videosrc}
                    >
                        {/* <source type="video/mp4" src={data.videosrc} /> */}
                    </video>
                </div>
                <h1>{data.title}</h1>
                {/* <div className="video">
                    <video
                        controls
                        poster="https://www.rv28.com/data/attachment/portal/202001/06/214816fylpt0h4wnne4y4u.jpg.thumb.jpg">
                        <source type="video/mp4" src="https://v.rv28.com/video/妹子探访宇通工厂，体验了10.98万的房车，园区内路试表现如何？.mp4" />
                    </video>
                </div>
                <h1>妹子探访宇通工厂，体验了10.98万的房车，园区内路试表现如何？ ...</h1> */}
                <div className="video-icon">
                    <span>
                        <em className="iconfont icon-good1"></em>
                        <i>0</i>
                    </span>
                    <span>
                        <em className="iconfont icon-weixin"></em>
                        <i> 分享到微信</i>
                    </span>
                    <span>
                        <em className="iconfont icon-bofang"></em>
                        <i> 1915</i>
                    </span>
                    <span>
                        <em className="iconfont icon-dkw_xiaoxi"></em>
                        <i> 0</i>
                    </span>
                </div>
                <div className="line"></div>
                <h3>相关车型</h3>
                <div className="vx-ctn">
                    <img className="fl" src="https://m.rv28.com/data/attachment/portal/201908/27/092926xdmi77xixth97973.jpg.thumb.jpg" />
                    <h4 className="fl">
                        <span>
                            宇通T510拖挂房车
                        </span>
                        <span>
                            10.98万
                        </span>
                    </h4>
                    <div className="btn fr">
                        <button>询底价</button>
                    </div>
                </div>
                <div className="line"></div>
                <div className="foot">
                    <img src="https://t12.baidu.com/it/u=4122389423,4285382062&fm=76" alt="" />
                    <img src="https://t11.baidu.com/it/u=4192536817,1802976995&fm=76" alt="" />
                    <img src="https://t11.baidu.com/it/u=845641693,2532750155&fm=76" alt="" />
                </div>
            </div >
        );
    }
}
export default VideoXiang;