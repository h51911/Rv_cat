import React from 'react'
import { Route, Switch, withRouter} from 'react-router-dom'
import { Layout,Breadcrumb,Menu,Icon} from 'antd';
import SearchUser from './searchuser'
import UpdataUser from './updateuser'
import Cancel from './cancel'
import 'antd/dist/antd.css'; 
import Allshop from './allshop'
import Addgoods from './addgoods'
import Login from './login/Login';
import Orderinf from './Orderinf';


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;




class sApp extends React.Component {

            shouldComponentUpdate() {
      let user = localStorage.getItem('username');
      if(user) {
        return true;
      }else{
        let {history} = this.props;
        history.push('/login')
      }
    }
     // 退出登录
     loginOut = () => {
      // localStorage.setItem('username','');
      this.props.history.push('/login')
    }
    render() {
       let username = localStorage.getItem('username');
      let {history} = this.props;

            return (
           <div>
                 {/* <Layout style= {{
                       xs: '480px',
                       sm: '576px',
                       md: '768px',
                       lg: '992px',
                       xl: '1200px',
                       xxl: '1600px',
                 }
                  }>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                    
                </Layout> */}
                


                <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">房猫车后台管理系统</Menu.Item>
        <Menu.Item key="2">{username}，欢迎您</Menu.Item>
        <Menu.Item key="3" onClick={this.loginOut}>退出登录</Menu.Item>
        {/* <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item> */}
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                用户管理
              </span>
            }
          >
            <Menu.Item key="1" onClick={()=>{
              history.push('/searchuser')
            }}>查询用户信息</Menu.Item>
            <Menu.Item key="2" onClick={()=>{history.push('/updata')}}>修改用户密码</Menu.Item>
            <Menu.Item key="3" onClick={()=>{history.push('/cancel')}}>注销用户</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="laptop" />
              管理员中心
              </span>
            }
          >
            <Menu.Item key="5" onClick={()=>{
              history.push('/allshop')
            }}>查询所有房车</Menu.Item>
                    <Menu.Item key="6" onClick={() => {
                      history.push('/addgoods')
                    }}>添加房车信息</Menu.Item>
            <Menu.Item key="7">修改房车相关信息</Menu.Item>
            <Menu.Item key="8"></Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="notification" />
                房车订单管理
              </span>
            }
          >
            <Menu.Item key="9" onClick={()=>{
              history.push('/orderinfo')
            }}>查看房车订单</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px',height:'98vh' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >


   <Switch>
           <Route path='/searchuser' component={SearchUser}/>
      
          <Route path='/updata' component={UpdataUser}/>
          <Route path='/cancel' component={Cancel}/>
          <Route path='/orderinfo' component={Orderinf} />
            <Route path="/allshop" component={Allshop}></Route>
                    <Route path="/addgoods" component={Addgoods}></Route>
    <Route path='/' component={SearchUser} exact/>
          </Switch>    
        </Content>
      </Layout>
    </Layout>

     
        <Route path='/login' component={Login} />
        {/* <Route path='/orderinfo' component={Orderinfo} /> */}

      
     

   
  </Layout>

           </div>
        )
    }
}
sApp = withRouter(sApp);


export default sApp