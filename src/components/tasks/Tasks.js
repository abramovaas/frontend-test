import Table from "../ui/table/Table";
import React, {useEffect, useState} from "react";
import './Tasks.scss';
import {useDispatch, useSelector} from "react-redux";
import api from "../../utils/api";
import {useModal} from "../../utils/hooks/modal/useModal";
import TaskInfo from "../task-info/TaskInfo";

function Tasks() {
  const dispatch = useDispatch();
  const modal = useModal();
  const loading = useSelector(state => state.tasks.loading);
  const tasks = useSelector(state => state.tasks.tasks);
  const [tableHeight, setTableHeight] = useState(0);
  const columns = [
    {
      header: 'ID',
      accessor: 'id',
      className: 'tasks__id'
    },
    {
      header: 'Task Name',
      accessor: 'taskName',
      className: 'tasks__name'
    },
    {
      header: 'Create',
      accessor: 'createdAt',
      className: 'tasks__createdAt'
    },
    {
      header: 'Manager',
      accessor: 'manager',
      className: 'tasks__manager'
    },
    {
      header: 'Priority',
      accessor: 'priority',
      className: 'tasks__priority'
    }
  ];

  useEffect(onInit, []);
  useEffect(calcHeightFirstFifteenRows, [tasks]);

  function onInit() {
    dispatch(api.tasks.get());
  }

  function calcHeightFirstFifteenRows() {
    const rows = document.getElementsByClassName('table__row');
    let height =  document.getElementsByClassName('table__header')[0].getBoundingClientRect().height;
    const rowsNumber = rows.length;

    height += rowsNumber
      ? Array
        .from(rows)
        .slice(0, 15)
        .reduce((sum, current) => {
          return sum + current.getBoundingClientRect().height
        }, 0)
      : +100;

    setTableHeight(height);
  }

  function onDrag(tasks) {
    tasks.map((task, index) => task.priority = index + 1);
    dispatch(api.tasks.update(tasks))
  }

  function onDoubleClick(task) {
    modal.open({
      component: () => <TaskInfo task={task}/>
    });
  }

  return  <div className='tasks'>
    <div className='tasks__table' style={{'height': tableHeight}}>
      <Table
        columns={columns}
        data={tasks}
        loading={loading}
        onDrag={onDrag}
        onDoubleClick={onDoubleClick}
      />
    </div>
  </div>
}

export default Tasks;