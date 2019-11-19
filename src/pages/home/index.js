import { Tabs } from 'antd'
import React, { Component } from 'react'
import ComingSoon from './components/ComingSoon'
import InThreaters from './components/InThreaters'
import { HomeAside, HomeMain, HomeWrapper } from './style'
import Weekly from './components/Weekly'
const { TabPane } = Tabs

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeMain className='main'>
          <Tabs type='card'>
            <TabPane tab='正在热映' key='1'>
              <InThreaters></InThreaters>
            </TabPane>
            <TabPane tab='即将上映' key='2'>
              <ComingSoon></ComingSoon>
            </TabPane>
            <TabPane tab='一周口碑榜' key='3'>
              <Weekly></Weekly>
            </TabPane>
          </Tabs>
        </HomeMain>
        <HomeAside>dd</HomeAside>
      </HomeWrapper>
    )
  }
  
}

export default Home
