import React from "react";
import '../style/Head.scss'

//引入字体图标
import '../assets/iconfont/iconfont.css'

function Head() {
    return (
        // <div classNameName="box">头部</div>
        <div className="nav">
            <p className="p_1">
                <span className="span_1 iconfont icon-jiantou1"></span>
                <span className="span_2">返回</span>
            </p>
            <div className="p_2">
                <span>二手房车</span>
                <i className=" i_1 iconfont icon-jiantou"></i>
            </div>
            <p className="p_3">首页</p>
        </div>
    )
}


export default Head;