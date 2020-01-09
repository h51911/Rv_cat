import React, { Component } from 'react';
import '../style/Second.scss'; // 引入外部样式
// import Head from '../Components/head.jsx'
import Head from '../components/head.jsx'

class Second extends Component {

    render() {

        return (
            <>
                <Head></Head>
                <div className="re">
                    <div className="img">
                        <span>123</span>
                    </div>
                </div>
            </>

        );
    }
}
export default Second;
