import React, { Component } from 'react'

import {
  HeaderWrapper,
  HeaderPrimary,
  HeaderSecondary,
  Logo,
  LogoHref,
  Search,
  Input,
  InputBtn,
  Nav
} from './style'

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderPrimary>
          <Logo>
            <LogoHref />
          </Logo>
          <Search className='search'>
            <Input>
              <input
                id='inp-query'
                placeholder='搜索电影、电视剧、综艺、影人'
              />
            </Input>
            <InputBtn>
              <input type='submit' value='' />
            </InputBtn>
          </Search>
        </HeaderPrimary>
        <HeaderSecondary>
          <Nav>
            <ul>
              <li>
                <a href='#'>影讯&amp;购票</a>
              </li>
              <li>
                <a href='#'>选电影</a>
              </li>
              <li>
                <a href='#'>电视剧</a>
              </li>
              <li>
                <a href='#'>排行榜</a>
              </li>
              <li>
                <a href='#'>分类</a>
              </li>
              <li>
                <a href='#'>影评</a>
              </li>
              <li>
                <a href='#'>2018年度榜单</a>
              </li>
              <li>
                <a href='#'>2018书影音报告</a>
              </li>
            </ul>
          </Nav>
        </HeaderSecondary>
      </HeaderWrapper>
    )
  }
}

export default Header
