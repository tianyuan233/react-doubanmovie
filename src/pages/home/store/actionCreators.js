import * as actionTypes from './actionTypes'

export const initListAction = (data) => {
  return {
    type: actionTypes.INIT_IN_THEATERS,
    data
  }
}