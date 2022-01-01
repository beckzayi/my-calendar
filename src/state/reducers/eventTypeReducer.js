import {
  CREATE_EVENT_TYPE,
  RETRIEVE_EVENT_TYPES,
  UPDATE_EVENT_TYPE,
  DELETE_EVENT_TYPE,
  FIND_EVENT_TYPES_BY_TITLE
} from "../actions/types";

let initialState = [];

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_EVENT_TYPE:
      return [...state, payload];
    case RETRIEVE_EVENT_TYPES:
      initialState = [...initialState, ...payload]; // TODO: will need to remove this which is for finding event types by title
      return payload;
    case UPDATE_EVENT_TYPE:
      return state.map(eventType => {
        return (eventType.id === payload.id) ? { ...eventType, ...payload } : eventType;
      });
    case DELETE_EVENT_TYPE:
      return state.filter(eventType => eventType.id !== payload);
    case FIND_EVENT_TYPES_BY_TITLE:
      return initialState.filter(et => et.title.toLowerCase().includes(payload.toLowerCase()));
    default:
      return state;
  }
}

export default reducer;
