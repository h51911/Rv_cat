import React, { Component } from 'react';
import axios from 'axios';
class All extends Component {
    constructor() {
        super();
        this.state = {
            data_1: []
        }
    }

    async componentDidMount() {
        // 发送ajax请求
        let { data } = await axios.get('http://localhost:3001/luo/second?mun=1');
        // console.log(data)
        this.setState({
            data_1: data
        })
    }
    render() {
        let { data_1 } = this.state;
        console.log(data_1);

        return (
            <div className="oneList">

                {/* <li className="list-item">
                    <div className="car-img">
                        <img alt="上海二手房车2017年上牌大通原厂C型房车店里现车多" style={{
                            width: "500",
                            display: 'block'
                        }} src="https://www.rv28.com/data/attachment/forum/threadcover/78/f7/21299.jpg" />

                    </div>
                    <div className="car-list">
                        <h3 className="car-name">[<em>出售</em>] 上海二手房车2017年上牌大通原厂C型房车店里现车多上海二手房车2017年上海二手房车2017年上牌大通原厂C型房车店里现车多上海二手房车2017年上牌大通原厂C2017年上牌大通原厂C2017年上牌大通原厂上海二手房车2017年上牌大通原厂C型房车店里现车多上海二手房车2017年上牌大通原厂C2017年上牌大通原厂C2017年上牌大通原厂上海二手房车2017年上牌大通原厂C型房车店里现车多上海二手房车2017年上牌大通原厂C2017年上牌大通原厂C2017年上牌大通原厂上海二手房车2017年上牌大通原厂C型房车店里现车多上海二手房车2017年上牌大通原厂C2017年上牌大通原厂C2017年上牌大通原厂上牌大通原厂C2017年上牌大通原厂C2017年上牌大通原厂C</h3>
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
                </li> */}

                {
                    data_1.map(item => {
                        return (
                            <li className="list-item">
                                <div className="car-img">
                                    <img alt="上海二手房车2017年上牌大通原厂C型房车店里现车多" style={{
                                        width: "500",
                                        display: 'block'
                                    }} src={item.src} />

                                </div>
                                <div className="car-list">
                                    <h3 className="car-name">{item.name}</h3>
                                    <div className="ar-km">
                                        <span className="z">{item.describe}</span>
                                        <div className="car-title">
                                            <span className="y" id="21299">{item.price}</span>
                                            <span className="threadAttr" style={{
                                                color: '#ff4f53', border: '1px solid #ff4f53'
                                            }}>置顶</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }



            </div>
        )
    }
}

export default All;