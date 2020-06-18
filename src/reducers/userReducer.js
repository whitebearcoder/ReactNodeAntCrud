import * as ACTION_TYPE from './actionType';
export default function userReducer(state = {}, action) {
  switch (action.type) {
    case ACTION_TYPE.GET_USER_LISTS:
      return {
        ...state,
        isLoaded: true,
        users: [...action.payload],
      };
    case ACTION_TYPE.UPDATE_USER:
      return {
        ...state,
      };
    case ACTION_TYPE.DELETE_USER:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
}
