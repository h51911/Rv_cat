import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
class Pb extends React.Component {
    constructor() {
        super();
        this.state = {
            title: ['推荐', '视频', '评测', '用车', '旅行', '新闻', '百科', '热帖'],
            active: '推荐',
            data: [],
            move: 0
        }
        this.huan = this.huan.bind(this);
        this.yidong = this.yidong.bind(this);
    }
    myactive(item) {
        if (item == '视频') {
            this.props.history.push('/video/1');
        }
        this.setState({
            active: item
        });
    }
    async componentDidMount() {
        let { data } = await axios.get('http://localhost:3001/home');
        this.setState({
            data
        });
    }
    huan() {
        this.u2.style.transition = null;//先去除定时器
        if (this.u2.style.left == "-706px") {
            this.u2.style.left = 0 + "px";
            setTimeout(() => {
                this.u2.style.transition = "left .5s"
                this.u2.style.left = -353 + "px";
            }, 1);
        } else if (this.u2.style.left == "-353px") {
            this.u2.style.left = -353 + "px";//候场
            setTimeout(() => {
                this.u2.style.transition = "left .5s"
                this.u2.style.left = -706 + "px";
            }, 1);
        } else {
            this.u2.style.left = 0 + "px";//候场
            this.u2.style.transition = "left .5s"
            this.u2.style.left = -353 + "px";
        }
    }
    yidong(ev) {
        console.log(ev);
    }
    render() {
        window.scrollTo(0, 0);
        return (
            <>
                <div className="pb">
                    <ul className="pb-tab">
                        {
                            this.state.title.map((item, index) => {
                                return (
                                    <li key={item}>
                                        <span onClick={this.myactive.bind(this, item)} className={this.state.active === item ? 'active' : ''}>{item}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="hot-news">
                    <div className="news-d1">
                        <img src="https://www.rv28.com/rv28/touch/css/ico_index_toutiao.png" alt="" />
                        <div className="hot-news-title">
                            网站APP正式更名为“房车猫”
                        </div>
                    </div>
                    <ul className="u1">
                        {this.state.data.slice(0, 4).map((item, index) => {
                            return (
                                <li className="clearfix" key={item.title}>
                                    <div className="d-left fl">
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                    <div className="d-right fr">
                                        <img src={item.src} alt="" />
                                    </div>
                                </li>
                            )
                        })}
                        <li className="t1">
                            <h4>
                                新星奔驰T600房车，豪华厚重与欧式简约时尚的完美融合
                            </h4>
                            <div className="img">
                                <img src="https://www.rv28.com/data/attachment/portal/201912/07/192916uxxuuds5yrhedxfo.jpg.thumb.jpg" alt="" />
                                <img src="https://www.rv28.com/data/attachment/portal/201811/09/210350n88vnmvbvk7bc8zb.jpg.thumb.jpg" alt="" />
                                <img src="https://www.rv28.com/data/attachment/portal/201912/07/192822z1aaagvu7uu6zyua.jpg.thumb.jpg" alt="" />
                            </div>
                            <p>
                                <span className="s1">车型</span>
                                <span className="s2">新星房车</span>
                            </p>
                        </li>
                        {this.state.data.slice(4, 6).map((item, index) => {
                            return (
                                <li className="clearfix" key={item.title}>
                                    <div className="d-left fl">
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                    <div className="d-right fr">
                                        <img src={item.src} alt="" />
                                    </div>
                                </li>
                            )
                        })}
                        <li className="t2">
                            <h4>
                                妹子探访宇通工厂，体验了10.98万的房车，园区内路试表现如何？ ...
                            </h4>
                            <div className="t2-img">
                                <span className="t2-icon iconfont icon-bofang"></span>
                                <img src="https://www.rv28.com/data/attachment/block/15/15ec4fc290a43fcaddedeef5ecc25a06.jpg" alt="" />
                            </div>
                            <div className="t2-span">
                                <span className="s1">11762播放</span>
                                <span className="s2">admin</span>
                            </div>
                        </li>
                        {this.state.data.slice(6, 8).map((item, index) => {
                            return (
                                <li className="clearfix" key={item.title}>
                                    <div className="d-left fl">
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                    <div className="d-right fr">
                                        <img src={item.src} alt="" />
                                    </div>
                                </li>
                            )
                        })}
                        <li className="t3">
                            <h4>
                                <span className="tuijian">房车推荐</span>
                                <p>
                                    <span className="jiazai iconfont icon-jiazai"></span>
                                    <span onClick={this.huan} className="huan">换一换</span>
                                </p>
                            </h4>
                            <div className="u2-d">
                                <ul onClick={this.yidong} ref={(e) => this.u2 = e} className="u2">
                                    <li>
                                        <img src="https://www.rv28.com/data/attachment/portal/201909/26/151603mxsg7pggg99zr0m9.jpg.thumb.jpg" alt="" />
                                        <span>宇通感恩版</span>
                                        <em>39.8万</em>
                                    </li>
                                    <li>
                                        <img src="https://www.rv28.com/data/attachment/portal/201912/07/192916uxxuuds5yrhedxfo.jpg.thumb.jpg" alt="" />
                                        <span>宇通感恩版</span>
                                        <em>39.8万</em>
                                    </li>
                                    <li>
                                        <img src="https://www.rv28.com/data/attachment/portal/201811/09/210350n88vnmvbvk7bc8zb.jpg.thumb.jpg" alt="" />
                                        <span>宇通感恩版</span>
                                        <em>39.8万</em>
                                    </li>
                                    <li>
                                        <img src="https://www.rv28.com/data/attachment/portal/201912/07/192822z1aaagvu7uu6zyua.jpg.thumb.jpg" alt="" />
                                        <span>宇通感恩版</span>
                                        <em>39.8万</em>
                                    </li>
                                    <li>
                                        <img src="https://www.rv28.com/data/attachment/block/7b/7b3a838443e095e9279ac7adc7327b57.jpg" alt="" />
                                        <span>宇通感恩版</span>
                                        <em>39.8万</em>
                                    </li>
                                    <li>
                                        <img src="https://www.rv28.com/data/attachment/block/a6/a6102dac0941577377410042eb1e7952.jpg" alt="" />
                                        <span>宇通感恩版</span>
                                        <em>39.8万</em>
                                    </li>
                                    <li>
                                        <img src="https://www.rv28.com/data/attachment/portal/201909/26/151603mxsg7pggg99zr0m9.jpg.thumb.jpg" alt="" />
                                        <span>宇通感恩版</span>
                                        <em>39.8万</em>
                                    </li>
                                    <li>
                                        <img src="https://www.rv28.com/data/attachment/portal/201912/07/192916uxxuuds5yrhedxfo.jpg.thumb.jpg" alt="" />
                                        <span>宇通感恩版</span>
                                        <em>39.8万</em>
                                    </li>
                                    <li>
                                        <img src="https://www.rv28.com/data/attachment/portal/201811/09/210350n88vnmvbvk7bc8zb.jpg.thumb.jpg" alt="" />
                                        <span>宇通感恩版</span>
                                        <em>39.8万</em>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {this.state.data.slice(8, 10).map((item, index) => {
                            return (
                                <li className="clearfix" key={item.title}>
                                    <div className="d-left fl">
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                    <div className="d-right fr">
                                        <img src={item.src} alt="" />
                                    </div>
                                </li>
                            )
                        })}
                        <li className="t2">
                            <h4>
                                房车停雪山下和小姐姐开心的吃着火锅，第二天起床却开心不起来 ...
                            </h4>
                            <div className="t2-img">
                                <span className="t2-icon iconfont icon-bofang"></span>
                                <img src="https://www.rv28.com/data/attachment/block/81/81c6748e4d9e692b1622c04381643f87.jpg" alt="" />
                            </div>
                            <div className="t2-span">
                                <span className="s1">11762播放</span>
                                <span className="s2">admin</span>
                            </div>
                        </li>
                        {this.state.data.slice(10, 12).map((item, index) => {
                            return (
                                <li className="clearfix" key={item.title}>
                                    <div className="d-left fl">
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                    <div className="d-right fr">
                                        <img src={item.src} alt="" />
                                    </div>
                                </li>
                            )
                        })}
                        <li className="t1">
                            <h4>
                                新年房车团购会，免费报名参加，享受6重大礼包
                            </h4>
                            <div className="img">
                                <img className="xinnian" src="https://www.rv28.com/data/attachment/forum/201912/04/102637k6l6h50zybx94vz3.jpg" alt="" />
                            </div>
                            <p>
                                <span className="s1">团购</span>
                                <span className="s2">房车时代</span>
                            </p>
                        </li>
                        {this.state.data.slice(12, 14).map((item, index) => {
                            return (
                                <li className="clearfix" key={item.title}>
                                    <div className="d-left fl">
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                    <div className="d-right fr">
                                        <img src={item.src} alt="" />
                                    </div>
                                </li>
                            )
                        })}
                        <li className="t1">
                            <h4>
                                新星奔驰T600房车，豪华厚重与欧式简约时尚的完美融合
                            </h4>
                            <div className="img">
                                <img src="https://m.rv28.com/data/attachment/portal/201909/03/172216dhz8761so3u2h26u.jpg.thumb.jpg" alt="" />
                                <img src="https://m.rv28.com/data/attachment/portal/201909/03/172217g1z7v6gz2xl4lggg.jpg.thumb.jpg" alt="" />
                                <img src="https://m.rv28.com/data/attachment/portal/201909/03/172219locm7mo7ontc6w7n.jpg.thumb.jpg" alt="" />
                            </div>
                            <p>
                                <span className="s1">360全景</span>
                                <span className="s2">爱旅途房车</span>
                            </p>
                        </li>
                        {this.state.data.slice(14, 16).map((item, index) => {
                            return (
                                <li className="clearfix" key={item.title}>
                                    <div className="d-left fl">
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                    <div className="d-right fr">
                                        <img src={item.src} alt="" />
                                    </div>
                                </li>
                            )
                        })}
                        <li className="t2">
                            <h4>
                                进口菲亚特底盘房车，内饰精致空间超大，比房子还温馨
                            </h4>
                            <div className="t2-img">
                                <span className="t2-icon iconfont icon-bofang"></span>
                                <img src="https://www.rv28.com/data/attachment/block/3c/3c5a36043008ac663e257763f4ed8996.jpg" alt="" />
                            </div>
                            <div className="t2-span">
                                <span className="s1">11762播放</span>
                                <span className="s2">admin</span>
                            </div>
                        </li>
                        {this.state.data.slice(16, 18).map((item, index) => {
                            return (
                                <li className="clearfix" key={item.title}>
                                    <div className="d-left fl">
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                    <div className="d-right fr">
                                        <img src={item.src} alt="" />
                                    </div>
                                </li>
                            )
                        })}
                        <li className="t4">
                            <h4>
                                <span>二手房车</span>
                                <span>查看更多 ></span>
                            </h4>
                            <ul className="t4-d1">
                                <li>
                                    <img src="https://www.rv28.com/data/attachment/block/5e/5e28d889681f020622a514497d742616.jpg" alt="" />
                                    <p>17.9万</p>
                                    <p>2017年上牌 ｜ 3.7万公里</p>
                                    <p>中道房车</p>
                                </li>
                                <li>
                                    <img src="https://www.rv28.com/data/attachment/block/d6/d634dafa40394de5a7908a79e753b4c7.jpg" alt="" />
                                    <p>二手房车万</p>
                                    <p>12年上牌 ｜ 风声万公里</p>
                                    <p>长城风骏6汽油2.4L</p>
                                </li>
                            </ul>
                        </li>
                        {this.state.data.slice(18, 20).map((item, index) => {
                            return (
                                <li className="clearfix" key={item.title}>
                                    <div className="d-left fl">
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                    <div className="d-right fr">
                                        <img src={item.src} alt="" />
                                    </div>
                                </li>
                            )
                        })}
                        <li className="t2">
                            <h4>
                                房车停雪山下和小姐姐开心的吃着火锅，第二天起床却开心不起来 ...
                            </h4>
                            <div className="t2-img">
                                <span className="t2-icon iconfont icon-bofang"></span>
                                <img src="https://www.rv28.com/data/attachment/block/a5/a53da07c0566fd0cba7f529d6ae869a6.jpg" alt="" />
                            </div>
                            <div className="t2-span">
                                <span className="s1">11762播放</span>
                                <span className="s2">admin</span>
                            </div>
                        </li>
                        {this.state.data.slice(20, 22).map((item, index) => {
                            return (
                                <li className="clearfix" key={item.title}>
                                    <div className="d-left fl">
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                    <div className="d-right fr">
                                        <img src={item.src} alt="" />
                                    </div>
                                </li>
                            )
                        })}
                        <li className="t5">
                            <h4>
                                <span>房车活动</span>
                                <span>查看更多 ></span>
                            </h4>
                            <ul className="t4-d1">
                                <li>
                                    <img src="https://www.rv28.com/data/attachment/block/ca/cac1467de549309972693eb9ceb68f83.jpg" alt="" />
                                    <p>2019首届中国(上海)房车节</p>
                                    <p>	2019-11-18 21:13 上海</p>
                                </li>
                                <li>
                                    <img src="https://www.rv28.com/data/attachment/block/99/99813acac438dca5cb8df4c52ad5eab9.jpg" alt="" />
                                    <p>宇通·凯伦宾威房车，西南购车节</p>
                                    <p>	2019-7-15 11:26 成都</p>
                                </li>
                            </ul>
                        </li>
                        {this.state.data.slice(22, 25).map((item, index) => {
                            return (
                                <li className="clearfix" key={item.title}>
                                    <div className="d-left fl">
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                    <div className="d-right fr">
                                        <img src={item.src} alt="" />
                                    </div>
                                </li>
                            )
                        })}
                        <li className="t2">
                            <h4>
                                房车停雪山下和小姐姐开心的吃着火锅，第二天起床却开心不起来 ...
                            </h4>
                            <div className="t2-img">
                                <span className="t2-icon iconfont icon-bofang"></span>
                                <img src="https://www.rv28.com/data/attachment/block/46/46b82fcbd7f7ecefc5ecc861a9629921.jpg" alt="" />
                            </div>
                            <div className="t2-span">
                                <span className="s1">11762播放</span>
                                <span className="s2">admin</span>
                            </div>
                        </li>
                        {this.state.data.slice(25, 28).map((item, index) => {
                            return (
                                <li className="clearfix" key={item.title}>
                                    <div className="d-left fl">
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                    <div className="d-right fr">
                                        <img src={item.src} alt="" />
                                    </div>
                                </li>
                            )
                        })}
                        <li className="t2">
                            <h4>
                                终于看到我们的房车了，里面到底是个什么样子？反正小郭相当满意 ...
                            </h4>
                            <div className="t2-img">
                                <span className="t2-icon iconfont icon-bofang"></span>
                                <img src="https://www.rv28.com/data/attachment/block/00/009ab43cf9652be72e5d8344bbb2168c.jpg" alt="" />
                            </div>
                            <div className="t2-span">
                                <span className="s1">11762播放</span>
                                <span className="s2">admin</span>
                            </div>
                        </li>
                        {this.state.data.slice(28, 33).map((item, index) => {
                            return (
                                <li className="clearfix" key={item.title}>
                                    <div className="d-left fl">
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                    <div className="d-right fr">
                                        <img src={item.src} alt="" />
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="gengduo">
                    查看更多 >>
                </div>
            </>
        );
    }
}
Pb = withRouter(Pb);
export default Pb