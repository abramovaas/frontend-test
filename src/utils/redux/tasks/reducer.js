import {GET_TASKS_SUCCESS, UPDATE_TASKS_SUCCESS} from "../actions";

const initialState = {
  loading: true,
  tasks: []
};

export default function (state = initialState, {type, payload}) {
  switch (type) {
    case GET_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: payload
      };
    case UPDATE_TASKS_SUCCESS:
      return {
        ...state,
        tasks: [...payload]
      };
    default:
      return state;
  }
}