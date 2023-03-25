import React, { useState } from 'react'

const AddTodoComp = (props) => {
    const [title, setTitle] = useState('');
    const style = {border: 'solid 2px black', padding: '3px'}
    const cancel = () => {
        props.setStatus('todosList')
    }
    const updateList = () => {
        const obj = {
            title: title,
            completed: false
        };
        const newTodos = [...props.todos, obj]
        //const resp = await axios.put(todosUrl, obj)
        props.updateList(newTodos)
        props.setStatus('todosList')
    }
    return (
    <div>
        New Todo - User {props.id}<br/> 
        <div style={style}>
            Title: <input type="text" onChange={(e) => setTitle(e.target.value)}></input><br/><br/>
            <button style={{backgroundColor: '#FFFACD'}} onClick={() => cancel()}>Cancel</button>
            <button style={{backgroundColor: '#FFFACD'}} onClick={() => updateList()}>Add</button>
        </div>
    </div>
  )
}
export default AddTodoComp