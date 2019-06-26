import * as types from "../actions";

const initialState = {
  users: [],
  fetchingUsers: false,
  addingUsers: false,
  updatingUsers: false,
  deletingUsers: false,
  projects: [],
  fetchingProjects: false,
  addingProjects: false,
  updatingProjects: false,
  deletingProjects: false,
  usersProjects: [],
  fetchingUsersProjects:false,
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
    case types.FETCHING_PROJECTS:
      return { ...state, fetchingProjects: true };
    case types.FETCHING_PROJECTS_SUCCESS:
      return { ...state, projects: action.payload, fetchingProject: false };
    case types.FETCHING_PROJECTS_FAILURE:
      return { ...state, fetchingProject: false };
    case types.ADDING_PROJECTS:
      return { ...state, addingProjects: true };
    case types.ADDING_PROJECTS_SUCCESS:
      return { ...state, projects: action.payload, addingProjects: false };
    case types.ADDING_PROJECTS_FAILURE:
      return { ...state, addingProjects: false };
    case types.DELETING_PROJECTS:
      return { ...state, deletingProjects: true };
    case types.DELETING_PROJECTS_SUCCESS:
      return { ...state, projects: action.payload, deletingProjects: false };
    case types.DELETING_PROJECTS_FAILURE:
      return { ...state, deletingProjects: false };
    case types.EDITING_PROJECTS:
      return { ...state, updatingProjects: true };
    case types.EDITING_PROJECTS_SUCCESS:
      return { ...state, projects: action.payload, updatingProjects: false };
    case types.EDITING_PROJECTS_FAILURE:
      return { ...state, updatingProjects: false };
    case types.FETCHING_USERS_PROJECTS:
      return { ...state, fetchingUsersProjects: true };
    case types.FETCHING_USERS_PROJECTS_SUCCESS:
      return { ...state, usersProject: action.payload, fetchingUsers: false };
    case types.FETCHING_USERS_PROJECTS_FAILURE:
      return { ...state, fetchingUsersProjects: false };
    default:
      return state;
  }
};
