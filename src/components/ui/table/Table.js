import React from "react";
import './Table.scss';
import classNames from 'classnames';
import Loader from "../loader/Loader";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Table({
    columns,
    data,
    loading,
    className,
    onDrag,
    onDoubleClick
  }) {

  function reorder(list, startIndex, endIndex) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  }

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }
    const items = reorder(data, result.source.index, result.destination.index);
    onDrag(items);
  }

  const getItemStyle = (isDragging, draggableStyle, isDraggingOver) => ({
    background: isDragging ? "#edecfe" : "#fff",
    ...draggableStyle
  });

  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
  });

  return (
    <table className={classNames('table', className)}>
      <thead>
        <tr className='table__header'>
          {columns.map(column =>
            <th
              className={classNames(
                'table__header-item',
                column.className
              )}
              key={column.accessor}
            >
              {column.header}
            </th>
          )}
        </tr>
      </thead>
      {loading
        ? <tbody><tr className='table__loader'><td><Loader/></td></tr></tbody>
        : <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <tbody
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                  {...provided.droppableProps}
                >
                  {data.map((item, index) => (
                    <Draggable
                      draggableId={item.taskName + item.id}
                      index={index}
                      key={item.taskName + item.id}
                    >
                      {(provided, snapshot) => (
                        <tr
                          className='table__row'
                          onDoubleClick={() => onDoubleClick(item)}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(snapshot.isDragging, provided.draggableProps.style, snapshot.isDraggingOver)}
                        >
                          {columns.map(col =>
                            <td
                              className={classNames(
                                'table__row-item',
                                col.className
                              )}
                              key={col.accessor}
                            >
                              {item[col.accessor]}
                            </td>
                          )}
                        </tr>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </tbody>
              )}
            </Droppable>
          </DragDropContext>
        }
    </table>
  )
}

export default Table;