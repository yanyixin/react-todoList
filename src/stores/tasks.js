const task = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        id       : action.payload.id,
        text     : action.payload.text,
        completed: false
      };
    case 'TOGGLE_TASK':
      if (state.id !== action.payload.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });

    default:
      return state;
  }
};

const tasks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        task({}, action)
      ];
    case 'REMOVE_TASK':
      return state.filter(t => t.id !== action.payload.id);
    case 'TOGGLE_TASK':
      return state.map(t =>
        task(t, action)
      );
    default:
      return state;
  }
};

export default tasks;
