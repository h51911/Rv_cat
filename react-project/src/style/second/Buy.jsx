import React, { Component } from 'react';
import axios from 'axios';
class Buy extends Component {
    constructor() {
        super();
        this.state = {
            data_1: []
        }
    }

    async componentDidMount() {
        // 发送ajax请求
        let { data } = await axios.get('http://localhost:3001/luo/second?mun=2');
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

                {
                    data_1.map(item => {
                        return (
                            <li className="list-item">
                                <div className="car-img">
                                    <img alt="上海二手房车2017年上牌大通原厂C型房车店里现车多" style={{
                                        width: "500",
                                        display: 'block'
                                    }} src="https://www.rv28.com/data/attachment/forum/threadcover/ff/41/20741.jpg" />

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

export default Buy;