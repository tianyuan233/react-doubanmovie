import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'
export const initHotListAction = data => {
  return {
    type: actionTypes.INIT_HOT,
    data
  }
}

export const getMoreHotListAction = data => {
  return {
    type: actionTypes.MORE_HOT,
    data: fromJS(data)
  }
}

export const initComingSoonListAction = data => {
  return {
    type: actionTypes.INIT_COMING,
    data
  }
}

export const initWeeklyListAction = data => {
  return {
    type: actionTypes.INIT_WEEKLY,
    data
  }
}
