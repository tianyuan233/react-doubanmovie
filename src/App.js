import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import Home from './pages/home'
import store from './store'
function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Route path='/' component={Home}></Route>
        <Route path='/detail' render={() => 'detail'}></Route>
      </BrowserRouter>
    </Provider>
  )
}

export default App
