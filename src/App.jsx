//这是根组件
import React from 'react'
import {HashRouter,Route,Link} from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
import styles from './css/app.scss'
import HomeContainer from './components/home/HomeContainer.jsx'
import MovieContainer from './components/movie/MovieContainer.jsx'
import AboutContainer from './components/about/AboutContainer.jsx'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


export default class App extends React.Component {
     constructor(props) {
          super(props)
          this.state ={}
     }
    // componentWillMount() {
    //     console.log();
    // }

     render() {
          return <HashRouter>
              <Layout style={{height:'100%'}}>
                  {/* 头部区 */}
                <Header className="header">
                <div className={styles.logo} />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[window.location.hash.split('/')[1]]}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="home"><Link to ="/home">首页</Link></Menu.Item>
                    <Menu.Item key="movie"><Link to ="/movie/in_theaters/1">电影</Link></Menu.Item>
                    <Menu.Item key="about"><Link to ="/about">关于</Link></Menu.Item>
                </Menu>
                </Header>
                {/* 内容区 */}
                <Content style={{backgroundColor:'#fff', flex:1}}>
                    <Route path="/home" component={HomeContainer}></Route>
                    <Route path="/movie" component={MovieContainer}></Route>
                    <Route path="/about" component={AboutContainer}></Route>
                </Content>
                {/* 尾部区 */}
                <Footer style={{ textAlign: 'center' }}>LCJ ©2018 Created by Ant UED</Footer>
            </Layout>
        </HashRouter>
     }
}