import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from "../actions/types";

export default (state = {}, action) => {
  switch(action.type) {
    case "FETCH_STREAM":
      return { ...state, [action.payload.id]: action.payload }
    case "FETCH_STREAMs":
    case "EDIT_STREAM":

    default:
      return state;
  }
};
