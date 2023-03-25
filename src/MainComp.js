import {useState, useEffect} from 'react'
import axios from 'axios';
import UserComp from './UserComp'
const userUrl = 'https://jsonplaceholder.typicode.com/users'
const MainComp = (props) => {
    const phoneStyle = {
        border: '1px solid black', borderRadius: '12px',
        width: '300px', maxHeight: '550px', padding: '10px',
        margin: '20px auto', float: 'left', marginLeft: '10px',
        paddingLeft: '10px', overflow: 'scroll'
    }
    const [searchName, setSearchName] = useState('');
    const [users, setUsers] = useState([]);
    const [filteredUsers, filterUsers] = useState([]);

    useEffect(() => {
        if (searchName !== '')
        {
            const tempUsers = users.filter(user => user.name.includes(searchName) 
            || user.email.includes(searchName))      
            filterUsers(tempUsers);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchName]);

    useEffect(() => {
       const fetchData = async () => {
            const {data} = await axios.get(userUrl);
            setUsers(data);
       }
       fetchData(); 
    }, []);
    
    const handleDeleteUser = (userId) => {
        const updatedUsers = users.filter(user => user.id !== userId);
        setUsers(updatedUsers);
    }
    return (
    <div style={phoneStyle}>
        Search: 
        <input type="text" onChange={(e) => setSearchName(e.target.value)}></input>
        <button>Add</button><br/><br/>
        {
            searchName === ''? (
                users.map(user => { return(
                    <UserComp key={user.id} user={user} 
                    onDeleteUser={handleDeleteUser} onShowMissions={props.onShowMissions}/>)
                })
            ) : (filteredUsers.map(user => { return(
                <UserComp key={user.id} user={user} 
                onDeleteUser={handleDeleteUser} onShowMissions={props.onShowMissions}/>)
            }))
        } 
    </div>
  )
}
export default MainComp;