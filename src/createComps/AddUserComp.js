import React, { useState } from 'react'
import userBLL from '../BLL/userBLL'
const AddUserComp = (props) => {
    const style = {padding: '3px', width: '300px',
    margin: '10px auto', float:'center'}
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const cancel = () => {
        props.showAddUser()
    }
    const updateUserList = () => {
        const obj = {
            id: userBLL.generateUniqueId(),
            name: name,
            email: email
        }
        userBLL.addUser(obj);
        const newUsers = [...props.users, obj]
        props.updateUserList(newUsers);
        props.resetId('');
        console.log(props.users);
        console.log(newUsers);
        cancel();
    }
    return (
    <div style={style}>
        Add new user<br/>
        <div style={{border: 'solid 2px black', padding: '3px',}}>
            Name: <input type="text" onChange={(e) => setName(e.target.value)}></input><br/>
            Email: <input type="text" onChange={(e) => setEmail(e.target.value)}></input><br/><br/>
            <button style={{backgroundColor: '#FFFACD'}} onClick={() => cancel()}>Cancel</button>
            <button style={{backgroundColor: '#FFFACD'}} onClick={() => updateUserList()}>Add</button>
        </div>
    </div>
  )
}
export default AddUserComp