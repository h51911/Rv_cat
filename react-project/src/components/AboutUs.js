import React, { Component } from 'react';
import '../style/AboutUs.scss'
class AboutUs extends Component {
    render() {
        return (
            <div className={'about_us'}>
                <div className={'line'}></div>
                <div className='tips'>
                    <div>
                        <dl>
                            <dt>关于我们</dt>
                            <dd>|</dd>
                        </dl>
                        <dl>
                            <dt>联系我们</dt>
                            <dd>|</dd>
                        </dl>
                        <dl>
                            <dt>人才招聘</dt>
                            <dd>|</dd>
                        </dl>
                        <dl>
                            <dt>下载APP</dt>
                        </dl>
                    </div>
                </div>
                <div className={'copyright'}>
                    <p className={'p1'}>
                        购车热线：
                        <a href="tel:19141251194">191 4125 1194</a>
                        （微信同号）
                    </p>
                    <p className={'p2'}>房车猫&copy;2018 www.rv28.com</p>
                </div>
            </div>
        )
    }
}

export default AboutUs;