import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
// import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'
import store from './store'
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <Provider store={store}>
      <Layout>
      <Content>
      <BrowserRouter>
        <Route path='/' exact component={Home}></Route>
        <Route path='/detail/:id' exact component={Detail}></Route>
      </BrowserRouter>
      </Content>
      <Footer>Made with React by zty</Footer>
    </Layout>
      
    </Provider>
  )
}

export default App
