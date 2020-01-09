import React from 'react';
import axios from 'axios';
class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],
            data: [],
        }
        console.log(this.props.page);
        this.props.onRef(this)
        this.xiangqing = this.xiangqing.bind(this);
        this.chao = this.chao.bind(this);
    }
    async componentDidMount() {
        let shu = 12 * this.props.page;
        let { data } = await axios.get('http://localhost:3001/video');
        this.setState({
            // datas: data,
            data: data.slice(shu - 12, shu)
        });
        // console.log(this.props.page);
    }
    xiangqing(vid) {
        console.log(vid);
    }
    chao(page) {
        let shuX = 12 * page;
        this.setState({
            page,
            data: this.state.datas.slice(shuX - 12, shuX)
        });
    }
    render() {
        // window.scrollTo(0, 0);
        // console.log("zi");
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
export default VideoList;