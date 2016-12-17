let nextTaskId = 0;
export const addTask = (text) => {
  return {
    type: 'ADD_TASK',
    payload: {
      id: nextTaskId++,
      text
    }
  }
};

export const removeTask = (id) => {
  return {
    type: 'REMOVE_TASK',
    payload: {
      id
    }
  }
};

export const setVisibility = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    payload: {
      filter
    }
  }
};

export const toggleTask = (id) => {
  return {
    type: 'TOGGLE_TASK',
    payload: {
      id
    }
  }
};
