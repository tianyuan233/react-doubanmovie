import styled from 'styled-components'

export const DetailWrapper = styled.div`
  width: 675px;
  margin: 40px auto;
  padding: 12px;
`

export const SubjectWrapper = styled.div`
  position: relative;
  height: 230px;
`

export const SubjectMain = styled.div`
  width: 500px;
  height:200px;
  position: absolute;
  left: 0;
  display: flex;
`
export const SubjectRateWrapper = styled.div`
  width: 155px;
  margin: 2px 0 0 0;
  padding: 0 0 0 15px;
  border-left: 1px solid #eaeaea;
  color: #9b9b9b;
  position: absolute;
  left: 500px;
  font-size: 12px;

  .rating-self {
    display: flex;
    .rating-num {
      color: #494949;
      padding: 0;
      min-width: 30%;
      font-size: 28px;
      margin-right: 5px;
      align-self: center;
    }

    .rating-right {
      .ant-rate-star:not(:last-child) {
        margin-right: 0px;
      }
    }
  }

  .rating-weight {
    .item {
      position: relative;
      height: 22px;
      .level {
        font-size: 14px;
        position: absolute;
        left: 0;
      }
      .percent {
        position: absolute;
        left: 28px;
      }
    }
  }
`

export const SubjectPic = styled.div`
position: absolute;
left:0;
  width: 135px;
  text-align: center;
  margin-right: 12px;
  overflow: hidden;
  & img {
    width: 100%;
  }
`

export const SubjectInfoWrapper = styled.div`
  position: absolute;
  left:150px;
  right:0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 15px;
`
export const InfoItem = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  .pl {
    color: #666;
    margin-bottom:0;
    span:not(:last-child)::after {
      content:'/'
    }
  }
`

export const InterestWrapper = styled.div`
  padding: 20px 0 3px;
`
export const InfoWrapper = styled.div`
  padding: 20px 0 3px;
  h2 {
    color: #33752f;
  }
  .indent {
    text-indent: 20px;
  }
`
