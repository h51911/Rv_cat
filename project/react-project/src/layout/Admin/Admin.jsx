import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Dropdown, Button } from 'antd';
import Addstudent from '../../pages/Admin/Addstudent/Addstudent';
import Addteacher from '../../pages/Admin/Addteacher/Addteacher';
import Apassword from '../../pages/Admin/Apassword/Apassword';
import Atm from '../../pages/Admin/Atm/Atm';
import Stm from '../../pages/Admin/Stm/Stm';
import Addcourse from '../../pages/Admin/Addcourse/Addcourse';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
export default class Alayout extends React.Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        var role = sessionStorage.getItem("role");
        var userID = sessionStorage.getItem("userID");
        var password = sessionStorage.getItem("password");
        if (role && password && userID) {
            if (role == 1) {
                this.role = '学生'
            } else if (role == 2) {
                this.role = '教师'
            } else if (role == 3) {
                this.role = '教务'
            }
        } else {
            this.props.history.push('/');//回到登录界面
        }
    }
    tuichu() {
        sessionStorage.removeItem("password");
        sessionStorage.removeItem("role");
        sessionStorage.removeItem("userID");
    }
    menu = (
        <Menu>
            <Menu.Item onClick={this.tuichu.bind(this)}>
                <Link to="/">退出</Link>
            </Menu.Item>
        </Menu>
    );
    render() {
        return (
            <Router>
                <Layout>
                    <Header className="header">
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px', width: '1200px', margin: 'auto' }}
                        >
                            <Menu.Item key="1" style={{ backgroundColor: '#1890ff', color: '#fff' }}>{this.role}管理系统</Menu.Item>
                            <div className="fr">
                                <Dropdown overlay={this.menu} placement="bottomLeft">
                                    <Button><Icon type="user" /></Button>
                                </Dropdown>
                            </div>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px', width: '1300px', margin: 'auto' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                        </Breadcrumb>
                        <Layout style={{ padding: '24px 0', background: '#fff' }}>
                            <Sider width={200} style={{ background: '#fff' }}>
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    style={{ height: '100%' }}
                                >
                                    <Menu.Item key="1"><Link to="/admin/addstudent">添加学生</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to="/admin/addteacher">添加教工</Link></Menu.Item>
                                    <Menu.Item key="7"><Link to="/admin/addcourse">给教师添加课程</Link></Menu.Item>
                                    <Menu.Item key="3"><Link to="/admin/apassword">修改密码</Link></Menu.Item>
                                    <Menu.Item key="5"><Link to="/admin/atm">教师信息</Link></Menu.Item>
                                    <Menu.Item key="6"><Link to="/admin/stm">学生信息</Link></Menu.Item>
                                    <Menu.Item key="8"><Link to="/admin/score">成绩查询</Link></Menu.Item>
                                    <Menu.Item key="9"></Menu.Item>
                                    <Menu.Item key="10"></Menu.Item>
                                    <Menu.Item key="11"></Menu.Item>
                                    <Menu.Item key="12"></Menu.Item>
                                </Menu>
                            </Sider>
                            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                                <Switch>
                                    <Route path="/admin/addstudent">
                                        <Addstudent />
                                    </Route>
                                    <Route path="/admin/addteacher">
                                        <Addteacher />
                                    </Route>
                                    <Route path="/admin/apassword">
                                        <Apassword />
                                    </Route>
                                    <Route path="/admin/atm">
                                        <Atm />
                                    </Route>
                                    <Route path="/admin/stm">
                                        <Stm />
                                    </Route>
                                    <Route path="/admin/addcourse">
                                        <Addcourse />
                                    </Route>
                                </Switch>
                            </Content>
                        </Layout>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}></Footer>
                </Layout>
            </Router>
        )
    }
}