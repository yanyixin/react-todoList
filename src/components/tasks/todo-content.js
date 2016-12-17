import React, {Component} from 'react';

export default class TodoContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readOnly: true
    };
  }
  toggleStatus(e){
    let index = e.target.parentNode.getAttribute('data-id');
    let completed = !this.props.list[index].completed;
    this.props.toggleStatus(completed,index);
  }
  deleteTodo(e){
    let index = e.target.parentNode.getAttribute('data-index');
    this.props.deleteTodo(index);
  }

  render() {
    return (
      <div>
        {
          this.props.list.map((list,index)=>{
            return(
              <div key={index}>
                <div className="task-item">
                  <div className="cell">
                    <button
                      data-id={index}
                      onClick={this.toggleStatus.bind(this)}
                      className="task-item__button"
                      type="button">
                      <span className="icon material-icons">done</span>
                    </button>
                  </div>
                  <div className={list.completed? '' : 'task-item--completed'}>
                    <div className="task-item__title" >
                      {list.content}
                    </div>
                  </div>
                  <div
                    className="cell">
                    <button
                      data-index={index}
                      onClick={this.deleteTodo.bind(this)}
                      value={index}
                      className="task-item__button"
                      type="button">
                      <span className="icon material-icons">删除</span>
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
