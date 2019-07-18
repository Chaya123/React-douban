import React from 'react'
import { Layout, Menu } from 'antd';
const {Content, Sider } = Layout;
import {Link,Route} from 'react-router-dom'
import MovieList from './MovieList.jsx'

export default class MovieContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state ={}
    }
   
    render() {
        return <Layout style={{height: '100%'}}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={[window.location.hash.split('/')[2]]}
            style={{ height: '100%' }}
          >
              <Menu.Item key="in_theaters"><Link to="/movie/in_theaters/1">正在热映</Link></Menu.Item>
              <Menu.Item key="coming_soon"><Link to="/movie/coming_soon/1">即将上映</Link></Menu.Item>
              <Menu.Item key="top250"><Link to="/movie/top250/1">Top250</Link></Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ background: '#fff', padding: '10px 10px', minHeight: 280 }}>
          <Route path="/movie/:type/:page" component={MovieList}></Route>
        </Content>
      </Layout>
    }
}

//fetch API是基于Promise实现的