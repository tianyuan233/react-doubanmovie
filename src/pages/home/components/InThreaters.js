import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { actionCreators } from '../store'
import { connect } from 'react-redux'

import { List, Rate, Icon, Tag, Button, Spin } from 'antd'
import { TagWrapper, ActorWrapper, LoadMore } from '../style'
import {Link} from 'react-router-dom'
const IMG_PROXY = '//images.weserv.nl/?url='
const API_URL = 'https://douban-api.uieee.com/v2/movie/in_theaters'
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
)

class InThreaters extends Component {
  render() {
    return (
      <Fragment>
        <List
          itemLayout='vertical'
          size='large'
          dataSource={this.props.hot_subjects}
          locale={{ emptyText: <Spin /> }}
          footer={<div></div>}
          renderItem={item => (
            <Link to={`/detail/${item.id}`}>
              <List.Item
                key={item.title}
                actions={[
                  <IconText
                    type='calendar-o'
                    text={item.mainland_pubdate}
                    key='list-vertical-like-o'
                  />,
                  <IconText
                    type='clock-circle-o'
                    text={item.durations[0]}
                    key='list-vertical-like-o'
                  />,
                  <IconText
                    type='star-o'
                    text={item.collect_count}
                    key='list-vertical-star-o'
                  />
                ]}
                extra={
                  <img
                    width={100}
                    alt='logo'
                    src={IMG_PROXY + item.images.small}
                  />
                }
              >
                <h3>{item.title}</h3>
                <TagWrapper>
                  {item.genres.map(tag => {
                    return (
                      <Tag color='green' key={tag}>
                        <Icon type='tag' /> {tag}
                      </Tag>
                    )
                  })}
                </TagWrapper>
                <ActorWrapper>
                  {item.casts.map(actor => {
                    return (
                      <Tag color='orange' key={actor.name}>
                        <Icon type='user' /> {actor.name}
                      </Tag>
                    )
                  })}
                </ActorWrapper>
                <div className='actor'></div>
                <Rate
                  disabled
                  allowHalf
                  defaultValue={Math.ceil(item.rating.average) / 2}
                />
              </List.Item>
            </Link>
          )}
        />
        <LoadMore>
          <Button
            onClick={() =>
              this.props.getMoreData(this.props.hot_subjects.length)
            }
          >
            点击加载更多
          </Button>
        </LoadMore>
      </Fragment>
    )
  }
  componentDidMount() {
    axios
      .get(API_URL, {
        params: {
          start: 0,
          count: 5
        }
      })
      .then(res => {
        const subjects = res.data.subjects
        const action = actionCreators.initHotListAction(subjects)
        this.props.initData(action)
      })
  }
}
const mapStateToProps = state => ({
  hot_subjects: state.getIn(['home', 'hot_subjects']).toJS()
})
const mapDispatchToProps = dispatch => ({
  initData(action) {
    dispatch(action)
  },
  getMoreData(start) {
    axios
      .get(API_URL, {
        params: {
          start: start,
          count: 5
        }
      })
      .then(res => {
        const subjects = res.data.subjects
        const action = actionCreators.getMoreHotListAction(subjects)
        dispatch(action)
      })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(InThreaters)
