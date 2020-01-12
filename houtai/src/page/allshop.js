import React from 'react'
import Api from '../Api'
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';


class Allshop extends React.Component {
    state = {

        data: []
    }
    async  componentDidMount() {
        let { data } = await Api.get()

        this.setState({
            data: data[0].items
        })
    }
     onChange=(pageNumber)=> {
    console.log('Page: ', pageNumber);
}
    render() {
        let { data, datas } = this.state
        console.log(data)
        return (
            <div>
                <Row>
                    <Col span={6} style={{ textAlign: "center" }}>id</Col>
                    <Col span={6} style={{textAlign:"center"}}>商品图片</Col>
                    <Col span={6} style={{ textAlign: "center" }}>描述</Col>
                    <Col span={6} style={{ textAlign: "center" }}>价格</Col>
                </Row>
                <div>
                 {data.map(item=>{
                     return <Row style={{ height: 80, borderBottom: '1px solid black' }} key={item.routeId}>
                      <Col span={6} style={{ height:'100%'}}>{item.routeId}</Col>
                         <Col span={6} style={{ height: '100%' }}><span style={{ height: '100%',width:'50%',display:'block' }}>
                             <img src={item.imgList[0].url} style={{ height: '80%', width: '100%', display: 'block',margin:'10px 0px 0px 50%',  }}/>
                         </span> </Col>
                         <Col span={6} style={{ height: '100%' }}>{item.routeName}</Col>
                         <Col span={6} style={{ height: '100%',textAlign:"center" }}>{item.routePrice}</Col>
                         
                     </Row>
                    
                 })}
                </div>
                   
                   
               
            </div>
        )
    }
}

export default Allshop