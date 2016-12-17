/**
 * Created by Krad on 2016/12/15.
 */
import React from 'react';

let TaskControl = ({active, text, onClick}) => {
  return (
    <a className={active && 'active' || ''}
       onClick={e => {
         e.preventDefault();
         onClick();
       }}>{text}</a>
  )
};

TaskControl.propTypes = {
  active : React.PropTypes.bool.isRequired,
  text   : React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default TaskControl;
