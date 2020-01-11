import React from 'react';
import axios from 'axios';
import Head from "../components/head.jsx";
import "../style/Search.scss";
import AboutUs from "../components/AboutUs.js";
class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            datas: [],
            data: [],
            text: '',
            times: null
        }
    }
    async componentDidMount() {
        let { data } = await axios.get('http://localhost:3001/home');
        console.log(data);

        this.setState({
            datas: data,
            data
        });
    }
    sousuo = (e) => {
        this.setState({
            text: e.target.value
        });

        window.clearTimeout(this.state.times);
        this.state.times = setTimeout(() => {
            this.setState({
                data: this.state.datas.filter((item) => {
                    if (item.title.indexOf(this.state.text) != -1) {
                        return item
                    }
                })
            });
        }, 1000);
    }
    render() {
        return (
            <div className="search">
                <Head>搜索主题</Head>
                <div className="sear ">
                    <input placeholder="房车购买" onChange={this.sousuo} value={this.text} />
                </div>
                <div className="hot-news">
                    <ul className="u1">
                        {this.state.data.map((item, index) => {
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
                <AboutUs></AboutUs>
                <div className="footer"></div>
            </div>
        )
    }
}
export default Search;