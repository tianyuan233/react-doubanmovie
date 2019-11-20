import * as actionTypes from './actionTypes'

export const initHotListAction = (data) => {
  return {
    type: actionTypes.INIT_HOT,
    data
  }
}

export const initComingSoonListAction = (data) => {
  return {
    type: actionTypes.INIT_COMING,
    data
  }
}

export const initWeeklyListAction = (data) => {
  return {
    type: actionTypes.INIT_WEEKLY,
    data
  }
}