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


export const FETCHING_PROJECTS = 'FETCHING_PROJECTS';
export const FETCHING_PROJECTS_SUCCESS = 'FETCHING_PROJECTS_SUCCESS';
export const FETCHING_PROJECTS_FAILURE = 'FETCHING_PROJECTS_FAILURE';

export const ADDING_PROJECTS = 'ADDING_PROJECTS';
export const ADDING_PROJECTS_SUCCESS = 'ADDING_PROJECTS_SUCCESS';
export const ADDING_PROJECTS_FAILURE = 'ADDING_PROJECTS_FAILURE';

export const EDITING_PROJECTS = 'EDITING_PROJECTS';
export const EDITING_PROJECTS_SUCCESS = 'EDITING_PROJECTS_SUCCESS';
export const EDITING_PROJECTS_FAILURE = 'EDITING_PROJECTS_FAILURE';

export const DELETING_PROJECTS = 'DELETING_PROJECTS ';
export const DELETING_PROJECTS_SUCCESS = 'DELETING_PROJECTS_SUCCESS';
export const DELETING_PROJECTS_FAILURE = 'DELETING_PROJECTS_FAILURE';

export const FETCHING_USERS_PROJECTS = 'FETCHING_PROJECTS';
export const FETCHING_USERS_PROJECTS_SUCCESS = 'FETCHING_PROJECTS_SUCCESS';
export const FETCHING_USERS_PROJECTS_FAILURE = 'FETCHING_PROJECTS_FAILURE';


export const login = (username, password, history) => dispatch => {
    const credentials = { username, password };
    axios.post('https://vrfp.herokuapp.com/auth/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        if (localStorage.getItem('token')) {
          history.history.push('/users')
          }
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


  export const fetchUser = (id) => dispatch => {
    dispatch({ type: FETCHING_USERS  });
    axiosImproved().get(`https://vrfp.herokuapp.com/users/${id}`)
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
  
    axiosImproved().put(`https://vrfp.herokuapp.com/users/${id}`,data)
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

  export const fetchUsersProjects = (id) => dispatch => {
    dispatch({ type: FETCHING_USERS_PROJECTS  });
    axiosImproved().get(`https://vrfp.herokuapp.com/users/${id}/Project`)
      .then(response => {
        dispatch({ type: FETCHING_USERS_PROJECTS_SUCCESS, payload: response.data});
      })
      .catch(error => {
        dispatch({ type: FETCHING_USERS_PROJECTS_SUCCESS, payload: error });
    });
  };

  /** Projects */

  export const fetchProjects = () => dispatch => {
    dispatch({ type: FETCHING_PROJECTS  });
    axios.get('https://vrfp.herokuapp.com/projects')
      .then(response => {
        dispatch({ type: FETCHING_PROJECTS_SUCCESS, payload: response.data});
      })
      .catch(error => {
        dispatch({ type: FETCHING_PROJECTS_FAILURE, payload: error });
    });
  };
  
  export const addingProject = (newProject) => dispatch => {
    dispatch({ type: ADDING_PROJECTS });
    axiosImproved().post('https://vrfp.herokuapp.com/projects',newProject)
      .then(response => {
        dispatch({ type: ADDING_PROJECTS_SUCCESS, payload: response.data});
      })
      .catch(error => {
        dispatch({ type: ADDING_PROJECTS_FAILURE, payload: error });
    });
  };
  

  export const editProject = (id,data) => dispatch => {

    dispatch({ type: EDITING_PROJECTS });
  
    axiosImproved().put(`https://vrfp.herokuapp.com/users{id}`,data)
      .then(response => {
        dispatch({ type: EDITING_PROJECTS_SUCCESS, payload: response.data});
      })
      .catch(error => {
        dispatch({ type: EDITING_PROJECTS_FAILURE, payload: error });
    });
  };
  
  export const deleteProject = (id) => dispatch => {
    dispatch({ type: DELETING_PROJECTS });
    axiosImproved().delete(`https://vrfp.herokuapp.com/users/${id}`)
      .then(response => {
        dispatch({ type: DELETING_PROJECTS_FAILURE, payload: response.data});
      })
      .catch(error => {
        dispatch({ type: DELETING_PROJECTS_FAILURE, payload: error });
    });
  };