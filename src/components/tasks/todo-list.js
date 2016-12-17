/**
 * Created by yanmeng on 2016/12/17.
 */
import React, {Component} from 'react';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readOnly: true
    };
  }
  toggleStatus(){

  }
  deleteTodo(e){
    let delIndex = e.target.getAttribute('data-key');
    this.props.deleteTodo(delIndex);
    console.log(delIndex);

  }

  render() {
    return (
      <div className="task-item" data-id={id}>
        <div className="cell">
          <button
            onClick={this.toggleStatus.bind(this)}
            className="task-item__button"
            type="button">
            <span className="icon material-icons">完成</span>
          </button>
        </div>
        <div className="cell">
          <div className="task-item__title" >
            {content}
          </div>
        </div>
        <div
          onClick={this.deleteTodo.bind(this)}
          className="cell">
          <button
            className="task-item__button"
            type="button">
            <span className="icon material-icons">删除{id}</span>
          </button>
        </div>
      </div>
    )
  }
}
