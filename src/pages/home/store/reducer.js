import {fromJS} from 'immutable'


import * as actionTypes from './actionTypes'
const defaultState = fromJS({
  subjects: []
})

export default (state=defaultState,action) =>{
  if (action.type === actionTypes.INIT_IN_THEATERS) {
    return state.set('subjects',fromJS(action.data))
  }
  return state
}