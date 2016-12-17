import React from 'react';
import { connect } from 'react-redux'
import { setVisibility } from '../../actions'
import TaskControl from './task-control'

const mapStateToProps = (state, props) => {
  return {
    active: props.filter === state.visibilityFilter,
    text  : props.text
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => {
      dispatch(setVisibility(props.filter))
    }
  }
};

const TaskFilters = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskControl);

const TaskNav = () => (
  <ul className="task-filters">
    <li>todolist</li>
  </ul>
);

export default TaskNav
