import {SEARCH_DATA, SET_LOADING} from "../types"

const owmdReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false,
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}

export default owmdReducer
