import {useEffect, useState} from 'react'

const TodosComp = (props) => {
  const style = {border: 'solid 2px purple', padding: '3px'}
  const [completed, setCompleted] = useState(props.todo.completed);
  const changeStatus = () => {
    setCompleted(true);
  }
  return (
    <div style={style}>
      <b>Title:</b> {props.todo.title} <br/>
      <b>Completed:</b> {completed.toString()} 
      {!completed && (<button onClick={() => changeStatus()} style={{backgroundColor:'#FFFACD'}}>Mark Completed</button>)}
    </div>
  )
}
export default TodosComp;