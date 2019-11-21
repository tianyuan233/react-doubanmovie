import {fromJS} from 'immutable'


import * as actionTypes from './actionTypes'
const defaultState = fromJS({
  subject: {},
  isLoading: true
})

export default (state=defaultState,action) =>{
  if (action.type === actionTypes.INIT_SUBJECT) {
    return state.set('subject',fromJS(action.data)).set('isLoading',false)
  }
  return state
}