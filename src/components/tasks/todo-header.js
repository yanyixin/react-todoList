import React, {Component} from 'react';

export default class TodoHeader extends Component {
  constructor(props){
    super(props);
  }
  addTodo(e){
    if (e.keyCode == 13){
      let value = e.target.value;
      if (!value) return false;

      let newTodo = {
        id: this.props.list.length+1,
        content: value,
        completed: true
      };
      e.target.value = '';
      this.props.addTodo(newTodo);
    }
  }
  render() {
    return (
      <div className="task-form">
        <input
          className="task-form__input"
          type="text"
          placeholder="请输入todo"
          onKeyUp={this.addTodo.bind(this)}/>
      </div>
    )
  }
}
