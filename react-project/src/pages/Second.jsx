import React, { Component } from 'react';
import '../style/Second.scss'; // 引入外部样式
// import Head from '../Components/head.jsx'
import Head from '../components/head.jsx'

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
            ]
        }

    }
    render() {
        return (
            <>
                <Head></Head>
                <div className="re">
                    <div className="img">
                        <div className="t1">
                            <span className="img_1"></span>
                            <div className="title_1">
                                <h3>二手房车
                                <i class="iconfont icon-shuzhuangtu">
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


            </>

        );
    }
}
export default Second;
