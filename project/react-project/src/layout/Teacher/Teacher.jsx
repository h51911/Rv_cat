import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Dropdown, Button } from 'antd';
import Tmessage from '../../pages/Teacher/Tmessage/Tmessage';
import Tpassword from '../../pages/Teacher/Tpassword/Tpassword';
import Didcourse from '../../pages/Teacher/Didcourse/Didcourse';
import Tscore from '../../pages/Teacher/Tscore/Tscore';
import Endtscore from '../../pages/Teacher/Endtscore/Endtscore';
import Tcomment from '../../pages/Teacher/Tcomment/Tcomment';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default class Alayout extends React.Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        var role = sessionStorage.getItem("role");
        if (role == 1) {
            this.role = '学生'
        } else if (role == 2) {
            this.role = '教师'
        } else if (role == 3) {
            this.role = '教务'
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
                            {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item> */}
                        </Breadcrumb>
                        <Layout style={{ padding: '24px 0', background: '#fff' }}>
                            <Sider width={200} style={{ background: '#fff' }}>
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    style={{ height: '100%' }}
                                >
                                    <Menu.Item key="1"><Link to="/teacher/tmessage1">教师信息</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to="/teacher/tmessage2">编辑信息</Link></Menu.Item>
                                    <Menu.Item key="3"><Link to="/teacher/tmessage3">修改密码</Link></Menu.Item>
                                    <Menu.Item key="5"><Link to="/teacher/didcourse">课程表</Link></Menu.Item>
                                    <Menu.Item key="6"><Link to="/teacher/tscore">评分</Link></Menu.Item>
                                    <Menu.Item key="7"><Link to="/teacher/endtscore">最终评分</Link></Menu.Item>
                                    <Menu.Item key="9"><Link to="/teacher/tcomment">学生评价</Link></Menu.Item>
                                    <Menu.Item key="10"></Menu.Item>
                                    <Menu.Item key="11"></Menu.Item>
                                    <Menu.Item key="12"></Menu.Item>
                                </Menu>
                            </Sider>
                            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                                <Switch>
                                    <Route path="/teacher/tmessage1">
                                        <Tmessage />
                                    </Route>
                                    <Route path="/teacher/tmessage2">
                                        <div>option3</div>
                                    </Route>
                                    <Route path="/teacher/tmessage3">
                                        <Tpassword />
                                    </Route>
                                    <Route path="/teacher/didcourse">
                                        <Didcourse />
                                    </Route>
                                    <Route path="/teacher/tscore">
                                        <Tscore />
                                    </Route>
                                    <Route path="/teacher/endtscore">
                                        <Endtscore />
                                    </Route>
                                    <Route path="/teacher/tcomment">
                                        <Tcomment />
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