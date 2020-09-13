import {GET_TASKS_SUCCESS, UPDATE_TASKS_SUCCESS} from "../actions";

export function getTasksSuccess(tasks) {
  return {
    type: GET_TASKS_SUCCESS,
    payload: tasks
  }
}

export function updateTasksSuccess(tasks) {
  return {
    type: UPDATE_TASKS_SUCCESS,
    payload: tasks
  }
}