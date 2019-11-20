import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { actionCreators } from '../store'
import { connect } from 'react-redux'

import { List, Rate, Icon, Tag } from 'antd'
import { TagWrapper, ActorWrapper } from '../style'
const IMG_PROXY = '//images.weserv.nl/?url='
const API_URL = 'https://douban.uieee.com/v2/movie/coming_soon'
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
)

class ComingSoon extends Component {
  render() {
    return (
      <Fragment>
        <List
          style={{ marginLeft: 20 }}
          itemLayout='vertical'
          size='large'
          pagination={{
            onChange: page => {
              console.log(page)
            },
            pageSize: 5
          }}
          dataSource={this.props.coming_subjects}
          footer={<div></div>}
          renderItem={item => (
            <List.Item
              key={item.id}
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
                {item.genres.map((tag,index) => {
                  return (
                    <Tag color='green' key={index}>
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
          )}
        />
      </Fragment>
    )
  }
  componentDidMount() {
    axios.get(API_URL).then(res => {
      const subjects = res.data.subjects
      const action = actionCreators.initComingSoonListAction(subjects)
      this.props.initData(action)
    })
  }
}
const mapStateToProps = state => ({
  coming_subjects: state.getIn(['home', 'coming_subjects']).toJS()
})
const mapDispatchToProps = dispatch => ({
  initData(action) {
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ComingSoon)
