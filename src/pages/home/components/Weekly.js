import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { actionCreators } from '../store'
import { connect } from 'react-redux'

import { List, Rate, Icon, Tag, Avatar, Spin } from 'antd'
import { TagWrapper, ActorWrapper } from '../style'
import {Link} from 'react-router-dom'
const IMG_PROXY = '//images.weserv.nl/?url='
const API_URL = 'https://douban.uieee.com/v2/movie/weekly'
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
)

class Weekly extends Component {
  render() {
    return (
      <Fragment>
        <List
          bordered='true'
          itemLayout='vertical'
          size='large'
          pagination={{
            onChange: page => {
              console.log(page)
            },
            pageSize: 5
          }}
          dataSource={this.props.weekly_subjects}
          locale={{ emptyText: <Spin /> }}
          footer={<div></div>}
          renderItem={item => (
            <Link to={`/detail/${item.subject.id}`}>
              <List.Item
                bordered='true'
                key={item.id}
                actions={[
                  <IconText
                    type='calendar-o'
                    text={item.subject.pubdates[0]}
                    key='list-vertical-like-o'
                    style={{ display: 'block' }}
                  />,
                  <IconText
                    type='star-o'
                    text={item.subject.collect_count}
                    key='list-vertical-star-o'
                  />
                ]}
                extra={
                  <img
                    width={100}
                    alt='logo'
                    src={IMG_PROXY + item.subject.images.small}
                  />
                }
              >
                <List.Item.Meta
                  avatar={
                    <Avatar
                      style={{
                        backgroundColor: 'gold'
                      }}
                    >
                      {item.rank}
                    </Avatar>
                  }
                  title={item.subject.title}
                />
                <TagWrapper>
                  {item.subject.genres.map((tag, index) => {
                    return (
                      <Tag color='green' key={index}>
                        <Icon type='tag' /> {tag}
                      </Tag>
                    )
                  })}
                </TagWrapper>
                <ActorWrapper>
                  {item.subject.casts.map(actor => {
                    return (
                      <Tag color='orange' key={actor.name}>
                        <Icon type='user' /> {actor.name}
                      </Tag>
                    )
                  })}
                </ActorWrapper>
                <Rate
                  disabled
                  allowHalf
                  defaultValue={Math.ceil(item.subject.rating.average) / 2}
                />
                {/* <div>
              <IconText
                  type='clock-circle-o'
                  text={item.subject.durations[0]}
                  key='list-vertical-like-o'
                />
              </div> */}
              </List.Item>
            </Link>
          )}
        />
      </Fragment>
    )
  }
  componentDidMount() {
    axios.get(API_URL).then(res => {
      const subjects = res.data.subjects
      const action = actionCreators.initWeeklyListAction(subjects)
      this.props.initData(action)
    })
  }
}
const mapStateToProps = state => ({
  weekly_subjects: state.getIn(['home', 'weekly_subjects']).toJS()
})
const mapDispatchToProps = dispatch => ({
  initData(action) {
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Weekly)
