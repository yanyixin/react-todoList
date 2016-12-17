import { combineReducers } from 'redux'
import tasks from './tasks'
import visibilityFilter from './visibility'

const taskStore = combineReducers({
  tasks,
  visibilityFilter
});

export default taskStore
