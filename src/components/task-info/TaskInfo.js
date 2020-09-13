import React from 'react';
import './TaskInfo.scss';

function TaskInfo({task}) {
  return <div className='task-info'>
    <div className='task-info__header'>
      <h3 className='task-info__title'>{`${task.taskName} (ID ${task.id})`}</h3>
      <div className='task-info__date'>{task.createdAt}</div>
    </div>
    <div className='task-info__description'><strong>Description:</strong> {task.description}</div>
    <div className='task-info__priority'><strong>Priority:</strong> {task.priority}</div>
    <div className='task-info__manager'><strong>Created by:</strong> {task.manager}</div>
  </div>
}

export default TaskInfo;