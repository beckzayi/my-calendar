import {
  CREATE_USER,
  RETRIEVE_USERS,
  UPDATE_USER,
  DELETE_USER,
  FIND_USER_BY_ID
} from "../types";

export const createUser = (user) => (dispatch) =>
  dispatch({
    type: CREATE_USER,
    payload: user
  });

export const retrieveUsers = (users) => (dispatch) =>
  dispatch({
    type: RETRIEVE_USERS,
    payload: users
  });

export const updateUser = (user) => (dispatch) =>
  dispatch({
    type: UPDATE_USER,
    payload: user
  });

export const deleteUser = (user) => (dispatch) =>
  dispatch({
    type: DELETE_USER,
    payload: user
  });

export const findUserById = (user) => (dispatch) =>
  dispatch({
    type: FIND_USER_BY_ID,
    payload: user
  });
