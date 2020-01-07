import React from 'react';

class Pb extends React.Component {
    constructor() {
        super();
        this.state = {
            title: ['推荐', '视频', '评测', '用车', '旅行', '新闻', '百科', '热帖'],
            active: '推荐'
        }
    }
    myactive(item) {
        this.setState({
            active: item
        });
    }
    render() {
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
                    <ul>
                        <li className="clearfix">
                            <div className="d-left fl">
                                <h3>选房车，看房车，买房车，玩房车，就用房车猫APP</h3>
                                <p>成都魔木科技有限公司</p>
                            </div>
                            <div className="d-right fr">
                                <img src="https://www.rv28.com/rv28/gg/appshouji.png" alt="" />
                            </div>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}
export default Pb