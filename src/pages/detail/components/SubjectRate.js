import React, { Component } from 'react'
import { SubjectRateWrapper } from '../style'
import { Rate, Progress } from 'antd'

import _ from 'lodash'

class SubjectRate extends Component {
  render() {
    const { rating } = this.props
    return (
      <SubjectRateWrapper>
        <div className='raing-logo'>豆瓣评分</div>
        <div className='rating-self'>
          <div className='rating-num'>{rating.average}</div>
          <div className='rating-right'>
            <Rate
              allowHalf
              disabled
              defaultValue={Math.ceil(rating.average) / 2}
              style={{ fontSize: 12 }}
            />
            <div className='raing-sum'>
              {_(rating.details).values().sum()} 人评价
            </div>
          </div>
        </div>
        <div className='rating-weight'>
          {Object.keys(rating.details).map(key => {
            return (
              <div className='item' key={key}>
                <span className='level'>{key}星</span>
                <Progress
                  percent={_.floor(
                    (rating.details[key] / _(rating.details).values().sum()) *
                      100
                  )}
                  strokeColor='gold'
                  className='percent'
                />
              </div>
            )
          })}
        </div>
      </SubjectRateWrapper>
    )
  }
}

export default SubjectRate
