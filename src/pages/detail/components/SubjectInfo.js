import React, { Component } from 'react'
import { SubjectInfoWrapper } from '../style'
import { InfoItem } from '../style'

class SubjectInfo extends Component {
  render() {
    const { subject } = this.props
    return (
      <SubjectInfoWrapper>
        <InfoItem>
          <span className='pl'>
            导演:{' '}
            {subject.directors.map(item => {
              return <span key={item.name}>{item.name}</span>
            })}
          </span>
        </InfoItem>
        <InfoItem>
          <span className='pl'>
            编剧:{' '}
            {subject.writers.map(item => {
              return <span key={item.name}>{item.name}</span>
            })}
          </span>
        </InfoItem>
        <InfoItem>
          <span className='pl'>
            主演:{' '}
            {subject.casts.map(item => {
              return <span key={item.name}>{item.name}</span>
            })}
          </span>
        </InfoItem>
        <InfoItem>
          <span className='pl'>
            类型:{' '}
            {subject.genres.map(item => {
              return <span key={item}>{item}</span>
            })}
          </span>
        </InfoItem>
        <InfoItem>
          <span className='pl'>
            地区:{' '}
            {subject.countries.map(item => {
              return <span key={item}>{item}</span>
            })}
          </span>
        </InfoItem>
        <InfoItem>
          <span className='pl'>
            语言:{' '}
            {subject.languages.map(item => {
              return <span key={item}>{item}</span>
            })}
          </span>
        </InfoItem>
        <InfoItem>
          <span className='pl'>
            上映日期:{' '}
            {subject.pubdates.map(item => {
              return <span key={item}>{item}</span>
            })}
          </span>
        </InfoItem>
        <InfoItem>
          <span className='pl'>
            片长:{' '}
            {subject.durations.map(item => {
              return <span key={item}>{item}</span>
            })}
          </span>
        </InfoItem>
        <InfoItem>
          <span className='pl'>
            又名:{' '}
            {subject.aka.map(item => {
              return <span key={item}>{item}</span>
            })}
          </span>
        </InfoItem>
      </SubjectInfoWrapper>
    )
  }
}

export default SubjectInfo
