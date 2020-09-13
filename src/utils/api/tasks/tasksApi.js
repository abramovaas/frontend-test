import data from "../../../data/tasksList";
import {getTasksSuccess, updateTasksSuccess} from "../../redux/tasks/actions";
import transformTasks from "../../transformTasks";

function getTasks() {
  return async dispatch => {
    const tasks = await getTasksAsync();
    tasks.sort((a, b) => a.priority > b.priority ? 1 : a.priority < b.priority ? -1 : 0);
    dispatch(getTasksSuccess(transformTasks.toTasks(tasks)))
  };
}

function updateTasks(tasks) {
  return dispatch => {
    dispatch(updateTasksSuccess(tasks))
  }
}

function getTasksAsync() {
  return new Promise(resolve => setTimeout(()=> {
    resolve(data);
  }, 2000))
}

export default {
  get: getTasks,
  update: updateTasks
}