require('normalize.css/normalize.css');
require('styles/App.css');

import React, {Component} from 'react';
import TodoHeader from '../components/tasks/todo-header';
import TodoNav from '../components/tasks/todo-nav';
import TodoContent from '../components/tasks/todo-content';

export default class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{
        id       : 1,
        content  : '今天要早睡',
        completed: true
      }, {
        id       : 2,
        content  : '明天要出去玩耍',
        completed: true
      }]
    };
  }

  // 添加todo
  addTodo(newTodo) {
    this.state.list.push(newTodo);
    this.setState({
      state: this.state
    })
  }

  //切换状态
  toggleStatus(completed, index) {
    this.state.list[index].completed = completed;
    this.setState({
      state: this.state
    })

  }

  //删除todo
  deleteTodo(index) {
    this.state.list.splice(index,1);
    this.setState({
      state: this.state
    });
  }

  render() {
    return (
      <div>
        <TodoHeader
          list={this.state.list}
          addTodo={this.addTodo.bind(this)}
        ></TodoHeader>
        <TodoNav></TodoNav>
        <TodoContent
          toggleStatus={this.toggleStatus.bind(this)}
          deleteTodo={this.deleteTodo.bind(this)}
          list={this.state.list}
        ></TodoContent>
      </div>
    );
  }
}
