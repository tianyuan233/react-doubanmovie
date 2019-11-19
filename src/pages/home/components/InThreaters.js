import React, { Component } from 'react'
import axios from 'axios'
import { actionCreators } from '../store'
import { connect } from 'react-redux'
class InThreaters extends Component {
  render() {
    console.log('props: ', this.props.subjects)
    return <div>热映</div>
  }
  componentDidMount() {
    axios.get('https://douban-api.uieee.com/v2/movie/in_theaters').then(res => {
      const subjects = res.data.subjects
      const action = actionCreators.initListAction(subjects)
      this.props.initData(action)
    })
  }
}
const mapStateToProps = state => ({
  subjects: state.getIn(['home', 'subjects'])
})
const mapDispatchToProps = dispatch => ({
  initData(action) {
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(InThreaters)
