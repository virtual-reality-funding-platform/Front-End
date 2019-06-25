import * as types from "../actions";

const initialState = {
  users: [],
  fetchingUsers: false,
  addingUsers: false,
  updatingUsers: false,
  deletingUsers: false,
  error: null
};

export const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING_USERS:
      return { ...state, fetchingUsers: true };
    case types.FETCHING_SUCCESS:
      return { ...state, users: action.payload, fetchingUsers: false };
    case types.FETCHING_FAILURE:
      return { ...state, fetchingUsers: false };
    case types.ADDING_USERS:
      return { ...state, addingUsers: true };
    case types.ADDING_SUCCESS:
      return { ...state, users: action.payload, addingUsers: false };
    case types.ADDING_FAILURE:
      return { ...state, addingUsers: false };
    case types.DELETING_USERS:
      return { ...state, deletingUsers: true };
    case types.DELETING_SUCCESS:
      return { ...state, users: action.payload, deletingUsers: false };
    case types.DELETING_FAILURE:
      return { ...state, deletingUsers: false };
    case types.EDITING_USERS:
      return { ...state, updatingUsers: true };
    case types.EDITING_SUCCESS:
      return { ...state, users: action.payload, addingUsers: false };
    case types.EDITING_FAILURE:
      return { ...state, addingUsers: false };
    default:
      return state;
  }
};
