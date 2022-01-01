import {
  CREATE_EVENT_TYPE,
  RETRIEVE_EVENT_TYPES,
  UPDATE_EVENT_TYPE,
  DELETE_EVENT_TYPE,
  FIND_EVENT_TYPES_BY_TITLE
} from "../types";

export const createEventType = (eventType) => (dispatch) =>
  dispatch({
    type: CREATE_EVENT_TYPE,
    payload: eventType
  });

export const retrieveEventTypes = (eventTypes) => (dispatch) =>
  dispatch({
    type: RETRIEVE_EVENT_TYPES,
    payload: eventTypes
  });

export const updateEventType = (eventType) => (dispatch) =>
  dispatch({
    type: UPDATE_EVENT_TYPE,
    payload: eventType
  });

export const deleteEventType = (id) => (dispatch) =>
  dispatch({
    type: DELETE_EVENT_TYPE,
    payload: id
  });

export const findEventTypesByTitle = (title) => (dispatch) =>
  dispatch({
    type: FIND_EVENT_TYPES_BY_TITLE,
    payload: title
  });
