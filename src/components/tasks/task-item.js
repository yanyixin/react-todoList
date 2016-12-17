/**
 * Created by Krad on 2016/12/15.
 */
import React from 'react';

let TaskItem = ({onToggleClick, onDeleteClick, completed, text}) => {
  return (
    <div className={`task-item ${completed ? 'task-item--completed' : ''}`}>
      <div className="cell">
        <button
          onClick={onToggleClick}
          className="task-item__button"
          type="button">
          <span className={`icon material-icons ${completed ? 'icon--active' : ''}`}>done</span>
        </button>
      </div>
      <div className="cell">
        <div className="task-item__title">
          {text}
        </div>
      </div>
      <div className="cell">
        <button
          onClick={onDeleteClick}
          className="task-item__button"
          type="button">
          <span className="icon material-icons">delete</span>
        </button>
      </div>
    </div>
  )
};

TaskItem.propTypes = {
  onToggleClick: React.PropTypes.func.isRequired,
  onDeleteClick: React.PropTypes.func.isRequired,
  completed    : React.PropTypes.bool.isRequired,
  text         : React.PropTypes.string.isRequired
};

export default TaskItem;
