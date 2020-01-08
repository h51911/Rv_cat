import React, { Component } from 'react';
import '../style/Second.scss'; // 引入外部样式
// import Head from '../Components/head.jsx'
import Head from '../components/head.jsx'

class Second extends Component {

    render() {

        return (
            <>
                <Head></Head>
                <div>二手车界面</div>
            </>

        );
    }
}
export default Second;
