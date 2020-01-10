import React, { Component } from 'react';
import '../style/Second.scss'; // 引入外部样式
import { Route, Switch, Redirect } from 'react-router-dom'
// import Head from '../Components/head.jsx'
import Head from '../components/head.jsx'


// 引入切换组件组件
import All from '../style/second/All.jsx'
import Buy from '../style/second/Buy.jsx'
import Sell from '../style/second/Sell.jsx'
import Sold from '../style/second/Sold.jsx'

// 引入地步组件
import AboutUs from '../components/AboutUs';
import '../style/AboutUs.scss'
class Second extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topList: [
                {
                    id: Date.now() + 10,
                    title: "全部",
                    path: "/all"
                },
                {
                    id: Date.now() + 20,
                    title: "出售",
                    path: "/sell"
                },
                {
                    id: Date.now() + 30,
                    title: "求购",
                    path: "/buy"
                },
                {
                    id: Date.now() + 40,
                    title: "已售",
                    path: "/sold"
                }
            ],
            current: "/all"
        }

    }
    // 切换组件
    changeList = (path) => {
        console.log(path)
        this.setState({
            current: path
        })
        this.props.history.push('/second' + path);
    }
    render() {
        let { topList, current } = this.state;
        return (
            <>
                <Head>二手房车</Head>
                <div className="re">
                    <div className="img">
                        <div className="t1">
                            <span className="img_1"></span>
                            <div className="title_1">
                                <h3>二手房车
                                <i className="iconfont icon-shuzhuangtu">
                                        <span>1</span>
                                    </i>
                                </h3>
                                <i>主题:2056 关注:2282</i>
                            </div>
                        </div>
                        <div className="gz">关注</div>
                    </div>
                </div>
                <div className="alist">
                    <div className="alist_1">
                        <div className="alist_2">
                            <i className="iconfont icon-jiantouxia"></i>
                            <span>信息筛选</span>
                        </div>
                    </div>
                    <div className="alist_1">
                        <div className="alist_2">
                            <i className="iconfont icon-weixin"></i>
                            <span>最新回复</span>
                        </div>
                    </div>
                </div>
                <div className="list_q">

                    {
                        topList.map(item => {
                            // console.log(this.path)
                            return (

                                // item.path == current ? 'list_w' : 'list_e'
                                <span className={item.path == current ? 'list_e' : 'list_w'}
                                    key={item.id}
                                    onClick={this.changeList.bind(this, item.path)}
                                >
                                    {item.title}
                                </span>
                            )
                        })
                    }
                </div>
                <div className="plate">
                    <i className="iconfont icon-quxiaozhiding"></i>
                    <span>房车之家二手房车板块管理条例</span>
                </div>
                {/* <div className="oneList">
                    
                  
                    <li className="list-item">
                        <div className="car-img">
                            <img alt="上海二手房车2017年上牌大通原厂C型房车店里现车多" style={{
                                width: "500",
                                display: 'block'
                            }} src="https://www.rv28.com/data/attachment/forum/threadcover/78/f7/21299.jpg" />

                        </div>
                        <div className="car-list">
                            <h3 className="car-name">[<em>出售</em>] 上海二手房车2017年上牌大通原厂C型房车店里现车多</h3>
                            <div className="ar-km">
                                <span className="z">3万公里 / 2017-08-12 / 上海</span>
                                <div className="car-title">
                                    <span className="y" id="21299">￥<em>23</em>万</span>
                                    <span className="threadAttr" style={{
                                        color: '#ff4f53', border: '1px solid #ff4f53'
                                    }}>置顶</span>
                                </div>
                            </div>
                        </div>
                    </li>

                </div> */}

                <Switch>
                    <Route path="/second/all" component={All} ></Route>
                    <Route path='/second/buy' component={Buy}></Route>
                    <Route path='/second/sell' component={Sell}></Route>
                    <Route path='/second/sold' component={Sold}></Route>
                    {/* <Redirect from='/second' to="/second/all" exact /> */}
                </Switch>
                <AboutUs></AboutUs>
            </>

        );
    }
    componentDidMount() {

    }
}
export default Second;
