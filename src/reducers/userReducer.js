import * as ACTION_TYPE from './actionType';
export default function userReducer(state = {}, action) {
  switch (action.type) {
    case ACTION_TYPE.GET_USER_LISTS:
      return {
        ...state,
        isLoaded: true,
        users: [
          ...action.payload.map((item, nIndex) => {
            return {
              key: item.id.toString(),
              ...item,
            };
          }),
        ],
      };
    case ACTION_TYPE.ADD_USER:
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    case ACTION_TYPE.UPDATE_USER:
      return {
        ...state,
        users: state.users.map((item) => {
          if (item.key === action.payload.key) return action.payload;
          else return item;
        }),
      };
    case ACTION_TYPE.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((item) => item.id !== action.payload),
      };
    case ACTION_TYPE.CHANGE_USER_FILTER_STRING:
      return {
        ...state,
        filter: {
          ...state.filter,
          strValue: action.payload,
        },
      };
    default:
      return {
        ...state,
      };
  }
}
