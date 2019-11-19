import styled from 'styled-components'
import logoPic from '../../static/img/logo.png'
export const HeaderWrapper = styled.div`
  /* height: 56px; */
  /* border-bottom: 1px solid #f0f0f0; */
  position: relative;
  background-color: #f0f3f5;
`
export const HeaderPrimary = styled.div`
  width: 1040px;
  margin: 0 auto;
  overflow: visible !important;
  position: relative;
  padding: 10px 0 5px;
  zoom: 1;
  border-bottom: 1px solid #e5ebe4;
`
export const HeaderSecondary = styled.div`
  width: 1040px;
  margin: 0 auto;
  padding-bottom: 0;
  overflow: hidden;
  zoom: 1;
`

export const Logo = styled.div`
  float: left;
  height: 56px;
  width: 145px;
  margin: 0 13px 0 0;
  background: url(${logoPic}) no-repeat 0 12px;
`
export const LogoHref = styled.a.attrs({
  href: '/'
})`
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  line-height: 100em;
`

export const Search = styled.div`
  margin-left: 145px;
  overflow: visible !important;
  position: relative;
  zoom: 1;
  padding: 10px 0 15px 0;
`
export const Input = styled.div`
  float: left;
  width: 470px;
  height: 34px;
  text-align: center;
  margin-right: -3px;
  cursor: text;
  background-image: url(http://img3.doubanio.com/dae/accounts/resources/a4a38a5/movie/assets/nav_mv_bg.png?s=1);

  & #inp-query {
    background: #fff;
    width: 96%;
    margin: 0;
    text-align: left;
    height: 30px;
    padding-left: 10px;
    outline: none;
    vertical-align: middle;
    border: none;
  }
`
export const InputBtn = styled.div`
  position: relative;
  left: -1px;
  width: 37px;
  height: 34px;
  zoom: 1;
  overflow: hidden;

  & input {
    width: 100%;
    height: 100%;
    font-size: 0;
    padding: 35px 0 0 0;
    overflow: hidden;
    color: transparent;
    cursor: pointer;
    vertical-align: middle;
    border: none;
    background: url(https://img3.doubanio.com/dae/accounts/resources/a4a38a5/movie/assets/nav_mv_bg.png?s=1)
      no-repeat 0 -40px;
  }
`

export const Nav = styled.div`
  float: none;
  zoom: 1;
  font-size: 14px;
  & ul {
    list-style: none;
    margin: 9px 0;
    padding: 0;
    & li {
      display: inline-block;
      margin-right: 25px;
      & a:visited {
        color: #27a;
        text-decoration: none;
      }

      & a:visited {
        color: #666699;
        text-decoration: none;
      }
      & a:link {
        color: #37a;
        text-decoration: none;
      }
      & a:visited {
        color: #669;
        text-decoration: none;
      }
      & a:link {
        color: #37a;
        text-decoration: none;
      }
    }
  }
`
