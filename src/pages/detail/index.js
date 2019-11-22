import React, { Component } from 'react'
import { actionCreators } from './store'
import {
  DetailWrapper,
  SubjectWrapper,
  SubjectMain,
  SubjectPic,
  InterestWrapper,
  InfoWrapper
} from './style'
import { connect } from 'react-redux'
import { Rate, Button, Icon, Spin,Tag,message } from 'antd'
import SubjectInfo from './components/SubjectInfo'
import SubjectRate from './components/SubjectRate'
import ActorList from './components/ActorList'
import PhotoList from './components/PhotoList'
import axios from 'axios'
const IMG_PROXY = '//images.weserv.nl/?url='

class Detail extends Component {
  render() {
    const { subject, isLoading } = this.props
    return isLoading ? (
      <DetailWrapper style={{ textAlign: 'center' }}>
        <Spin />
      </DetailWrapper>
    ) : (
      <DetailWrapper>
        <h1 style={{ color: '#494949', fontWeight: 'bold' }}>
          <span>{subject.title}</span>
          <span style={{ color: '#888' }}>({subject.year})</span>
        </h1>
        <SubjectWrapper>
          <SubjectMain>
            <SubjectPic>
              <img src={IMG_PROXY + subject.images.small} alt={subject.title} />
            </SubjectPic>
            <SubjectInfo subject={subject} />
          </SubjectMain>
          <SubjectRate rating={subject.rating} />
        </SubjectWrapper>
        <InterestWrapper>
          <Button size='small' style={{ marginRight: 5 }}>
            想看
          </Button>
          <Button size='small' style={{ marginRight: 5 }}>
            看过
          </Button>
          <span>
            评价：
            <Rate
              onChange={() => {
                message.success('评分提交成功',2)
              }}
            />
          </span>
          <div style={{ marginTop: 10 }}>
            <span>
              <Icon type='message' />
              <a href='#q'> 写短评</a>
            </span>
            <span style={{ marginLeft: 5 }}>
              <Icon type='edit' />
              <a href='#w'> 写影评</a>
            </span>
          </div>
        </InterestWrapper>
        <InfoWrapper>
          <h2>{subject.title}的剧情简介 · · · · · ·</h2>
          <div className='indent'>{subject.summary}</div>
        </InfoWrapper>
        <InfoWrapper>
          <h2>{subject.title}的标签 · · · · · ·</h2>
          {
            subject.tags.map(tag=>{
            return <Tag key={tag} style={{fontSize:14,color: '#37a',backgroundColor:'#f5f5f5'}}>{tag}</Tag>
            })
          }
        </InfoWrapper>
        <InfoWrapper>
          <h2>{subject.title}的主演 · · · · · ·</h2>
          <ActorList casts={subject.casts} />
        </InfoWrapper>
        <InfoWrapper>
          <h2>{subject.title}的剧照 · · · · · ·</h2>
          <PhotoList photos={subject.trailers} />
        </InfoWrapper>
      </DetailWrapper>
    )
  }

  componentDidMount() {
    axios
      .get('https://douban-api.uieee.com/v2/movie/subject/' + this.props.match.params.id)
      .then(res => {
        const detail = res.data
        const action = actionCreators.initDetailAction(detail)
        this.props.initDetailData(action)
      })
  }
}

const mapStateToProps = state => ({
  subject: state.getIn(['detail', 'subject']).toJS(),
  isLoading: state.getIn(['detail', 'isLoading'])
})

const mapDispatchToProps = dispatch => ({
  initDetailData(action) {
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
