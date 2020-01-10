import React from "react";
import "../style/Space.scss";


class Center extends React.Component {
    render() {
        return (
            <div className="space">
                {/* <!--  --> */}
                <div class="rv_hykj rv_hykjw">
                    <div class="rv_tbys cl" id="topnav" style={{ display: "block" }}>
                        <a class="topnav z pl10">
                            <i class="c-main4  iconfont"></i>
                            返回
                        </a>
                        <a class="kjcd topnav fr pr10" style={{ margin: "0 10px 0 0" }}>菜单</a>
                        <ul id="demo_ul_2" class="rv_kjtcnr"
                            style={{ display: "none", position: "absolute", marginTop: "0px", marginLeft: "0px", background: "rgba(0, 0, 0, 0.8)", width: "100%", height: "45px", float: "left", top: "0px", padding: "0px", borderRadius: "0px" }}>
                            <li><a class="kjcdsy">首页</a></li>
                            <li><a class="kjcdzt">主题</a>
                            </li>
                            <li><a class="kjcdrz">日志</a></li>
                            <li><a class="kjcdxc">相册</a>
                            </li>
                        </ul>
                    </div>

                    <div class="rv_txdh cl">
                        <div class="rv_txdhb cl">
                            <div class="rv_kjtx z cl">
                                <img src="http://www.rv28.com/uc_server/avatar.php?uid=73074&amp;size=middle" />
                            </div>
                            <div class="rv_kjdh z cl">
                                <h2>艾文aiwen </h2>
                                <p>该用户懒到没有签名！</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  */}
                <div class="rv_wdkjzt cl">
                    <div class="rv_hykjzl cl">
                        <ul>
                            <li><i class="rv_fbztlj"><a>0个</a></i><a>发布主题</a></li>
                            <li><i>无照驾驶</i><a>当前等级</a></li>
                            <li><i class="rv_fbztlj"><a class="hyewm">&nbsp;</a></i><a>二维码</a></li>
                            <li><i>0 小时</i><a>累计在线</a></li>
                            <li><i>2020-1-8 11:25</i><a>最后访问</a></li>
                            <li class="wdwdx"><i>2020-1-6 17:28</i><a>注册时间</a></li>
                        </ul>
                    </div>
                    <div class="rv_hyzlcz cl">
                        <ul>
                            <li class="rv_hyzlly"><a>编辑资料</a></li>
                        </ul>
                    </div>
                </div>

                {/*  */}
                <div class="footer rv_qjywys">
                    <p class="opt-change">
                        <a href="">关于我们</a> <em>|</em>
                        <a href="">联系我们</a> <em>|</em>
                        <a href="">人才招聘</a> <em>|</em>
                        <a href="">下载APP</a>
                    </p>
                    <div class="copyright">
                        <p class="foot-contact">购车热线：<a>191 4125 1194</a>（微信同号）</p>
                        <p>房车猫 © 2018 www.rv28.com</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Center;