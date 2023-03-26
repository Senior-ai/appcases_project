import {useState, useEffect} from 'react'
import UserComp from './UserComp'


const MainComp = (props) => {
    const phoneStyle = {
        border: '1px solid black', borderRadius: '12px',
        width: '300px', maxHeight: '550px', padding: '10px',
        margin: '20px auto', float: 'left', marginLeft: '10px',
        paddingLeft: '10px', overflow: 'scroll'
    }
    
    const [searchName, setSearchName] = useState('');
    const [filteredUsers, filterUsers] = useState([]);

    useEffect(() => {
        if (searchName !== '')
        {
            const tempUsers = props.users.filter(user => user.name.includes(searchName) 
            || user.email.includes(searchName))      
            filterUsers(tempUsers);
        }
        else {
            filterUsers(props.users);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchName, props.users]);
    
    const showAddUser = () => {props.showAddUser()};

    return (
    <div style={phoneStyle}>
        Search: 
        <input type="text" onChange={(e) => setSearchName(e.target.value)}></input>
        <button onClick={() => showAddUser()}>Add</button><br/><br/>
        {filteredUsers.map(user => { return(
                <UserComp key={user.id} user={user} selectedId={props.selectedId}
                onDeleteUser={props.delUser} onShowMissions={props.onShowMissions}/>)
            })
        } 
    </div>
  )
}
export default MainComp;