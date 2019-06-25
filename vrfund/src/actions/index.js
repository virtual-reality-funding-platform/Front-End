import axios from 'axios';
import axiosImproved from '../axios';


export const FETCHING_USERS = 'FETCHING_USERS';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const ADDING_USERS = 'ADDING_USERS';
export const ADDING_SUCCESS = 'ADDING_SUCCESS';
export const ADDING_FAILURE = 'ADDING_FAILURE';

export const EDITING_USERS = 'EDITING_USERS';
export const EDITING_SUCCESS = 'EDITING_SUCCESS';
export const EDITING_FAILURE = 'EDITING_FAILURE';

export const DELETING_USERS = 'DELETING_USERS ';
export const DELETING_SUCCESS = 'DELETING_SUCCESS';
export const DELETING_FAILURE = 'DELETING_FAILURE';

export const login = (username, password) => dispatch => {
    const credentials = { username, password };
    axios.post('https://vrfp.herokuapp.com/auth/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
      })
      .catch(res => {
        console.log('AUTH FAILED!!!');
        
      })
  };
export const fetchUsers = () => dispatch => {
    dispatch({ type: FETCHING_USERS  });
    axiosImproved().get('https://vrfp.herokuapp.com/users')
      .then(response => {
        dispatch({ type: FETCHING_SUCCESS, payload: response.data});
      })
      .catch(error => {
        dispatch({ type: FETCHING_FAILURE, payload: error });
    });
  };
  
  export const addingUser = (newUser) => dispatch => {
    dispatch({ type: ADDING_USERS });
    axiosImproved().post('https://vrfp.herokuapp.com/auth/register',newUser)
      .then(response => {
        dispatch({ type: ADDING_SUCCESS, payload: response.data});
      })
      .catch(error => {
        dispatch({ type: ADDING_FAILURE, payload: error });
    });
  };
  

  export const editUser = (id,data) => dispatch => {

    dispatch({ type: EDITING_USERS });
  
    axiosImproved().put(`https://vrfp.herokuapp.com/users{id}`,data)
      .then(response => {
        dispatch({ type: EDITING_SUCCESS, payload: response.data});
      })
      .catch(error => {
        dispatch({ type: EDITING_FAILURE, payload: error });
    });
  };
  
  export const deleteUser = (id) => dispatch => {
    dispatch({ type: DELETING_USERS });
    axiosImproved().delete(`https://vrfp.herokuapp.com/users/${id}`)
      .then(response => {
        dispatch({ type: DELETING_SUCCESS, payload: response.data});
      })
      .catch(error => {
        dispatch({ type: DELETING_FAILURE, payload: error });
    });
  };