import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Dropdown, Button } from 'antd';
import Smessage from '../../pages/Student/Smessage/Smessage';
import Spassword from '../../pages/Student/Spassword/Spassword';
import Selectcourse from '../../pages/Student/Selectcourse/Selectcourse';
import Didcourse from '../../pages/Student/Didcourse/Didcourse';
import Score from '../../pages/Student/Score/Score';
import Scomment from '../../pages/Student/Scomment/Scomment';
import Sacomment from '../../pages/Student/Sacomment/Sacomment';
import {
    useParams,
    withRouter
} from "react-router-dom";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
export default withRouter(class Alayout extends React.Component {
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
                            <Menu.Item key="1" style={{ backgroundColor: '#1890ff', color: '#fff' }} >{this.role}管理系统</Menu.Item>
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
                                    <Menu.Item key="1"><Link to="/alayout/smessage1">学生信息</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to="/alayout/smessage2">编辑信息</Link></Menu.Item>
                                    <Menu.Item key="3"><Link to="/alayout/smessage3">修改密码</Link></Menu.Item>
                                    <Menu.Item key="5"><Link to="/alayout/didcourse">课程表</Link></Menu.Item>
                                    <Menu.Item key="6"><Link to="/alayout/selectcourse">选课</Link></Menu.Item>
                                    <Menu.Item key="7"><Link to="/alayout/didcourse">已选课程</Link></Menu.Item>
                                    <Menu.Item key="8"><Link to="/alayout/score">成绩查询</Link></Menu.Item>
                                    <Menu.Item key="9"><Link to="/alayout/scomment">学生评教</Link></Menu.Item>
                                    <Menu.Item key="10"></Menu.Item>
                                    <Menu.Item key="11"></Menu.Item>
                                    <Menu.Item key="12"></Menu.Item>
                                </Menu>
                            </Sider>
                            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                                <Switch>
                                    <Route path="/alayout/smessage1">
                                        <Smessage />
                                    </Route>
                                    <Route path="/alayout/smessage2">
                                        <div>option3</div>
                                    </Route>
                                    <Route path="/alayout/smessage3">
                                        <Spassword />
                                    </Route>
                                    <Route path="/alayout/selectcourse">
                                        <Selectcourse />
                                    </Route>
                                    <Route path="/alayout/didcourse">
                                        <Didcourse />
                                    </Route>
                                    <Route path="/alayout/score">
                                        <Score />
                                    </Route>
                                    <Route path="/alayout/scomment">
                                        <Scomment />
                                    </Route>
                                    <Route path="/alayout/sacomment">
                                        <Sacomment />
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
});