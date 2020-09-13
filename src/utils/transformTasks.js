import moment from "moment";

const toTasks = (data) => data.map(item => ({...item, createdAt: moment(item.createdAt).format('DD/MM/YY H:mm')}));

export default {
  toTasks
};

