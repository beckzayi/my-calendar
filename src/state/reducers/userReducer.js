import {
  CREATE_USER,
  RETRIEVE_USERS,
  UPDATE_USER,
  DELETE_USER,
} from "../actions/types";

const initialState = [];

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_USER:
      return [...state, payload];
    case RETRIEVE_USERS:
      return payload;
    case UPDATE_USER:
      return state.map(user => {
        return (user.id === payload.id) ? { ...user, ...payload } : user;
      });
    case DELETE_USER:
      return state.filter(user => user.id !== payload.id);
    default:
      return state;
  }
}

export default reducer;
