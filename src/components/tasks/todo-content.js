import React, {Component} from 'react';

export default class TodoContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // readOnly: true
    };
  }
  // toggleStatus(e){
  //   let index = e.target.parentNode.getAttribute('data-id');
  //   // console.log(index);
  //   // console.log(this.props.list[index]);
  //   let newCompleted = !this.props.list[index].completed;
  //   this.props.toggleStatus(newCompleted,index);
  // }
  // deleteTodo(e){
  //   let index = e.target.parentNode.getAttribute('data-index');
  //   this.props.deleteTodo(index);
  // }

  render() {
    const {deleteTodo}=this.props;
    const {toggleStatus}=this.props;
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
                      onClick={toggleStatus.bind(this,list.id)}
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
                      onClick={deleteTodo.bind(this,index)}
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
