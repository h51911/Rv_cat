import React from "react";
import {Route,Switch,withRouter,Redirect} from 'react-router-dom'
/* 样式 */
import "../style/Choose.scss";

/* antd */
import { Tabs, WhiteSpace } from "antd-mobile";
import { StickyContainer, Sticky } from "react-sticky";

/* 头部 */
import Header from "../components/Header";

/* 切换 */
import Brand from '../components/Brand';
import Condition from '../components/Condition';
import Hot from '../components/Hot';


class Choose extends React.Component {
  state = {
    list: [
      { title: "按品牌", path: "/brand" },
      { title: "按条件", path: "/condition" },
      { title: "热门车", path: "/hot" }
    ],
    activeKey: "/brand"
  };

  /* 点击切换 */
  changeTab=(path)=>{
    
    this.setState({
      activeKey:path
    })

    console.log(path)
    this.props.history.push('/choose'+path);
  }

  /*  */
  componentDidMount(){
    // this.activeKey='t1';
    // this.changeTab()
    // let activeKey=this.state.activeKey
    this.props.history.push('/choose'+this.state.activeKey);
    // console.log('this.activeKey',this.activeKey)
  }

  render() {
    let { list, activeKey } = this.state;
    return (
      <div className="choose">
        {/* 头部 */}
        <Header></Header>

        {/* 切换 */}
        <div className={'Tab'}>
           {list.map(item=>{
              return (
         
                  <div 
                  className={item.path==activeKey?'active d1':'d1'}
                  key={item.title}
                  onClick={this.changeTab.bind(this,item.path)}
                  >
                  {item.title}
                 
                  </div>
                 
        
                )
              
           })}
           
        </div>
        {/* <Brand></Brand>
        <Condition></Condition>
        <Hot></Hot> */}
        <Switch>
          <Route path='/choose/brand' component={Brand}></Route>
          <Route path='/choose/condition' component={Condition}></Route>
          <Route path='/choose/hot' component={Hot}></Route>
          {/* 重定向 */}
          <Redirect from="/choose" to="/choose/brand" exact />
        </Switch>


      </div>
    );
  }
}
// Choose=withRouter(Choose)
export default Choose;
