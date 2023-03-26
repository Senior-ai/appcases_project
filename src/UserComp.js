import {useState, useEffect} from 'react'
import axios from 'axios';
import DataComp from './DataComp';
import userBLL from './BLL/userBLL'
const tasksUrl = 'https://jsonplaceholder.typicode.com/todos'
const usersUrl = 'https://jsonplaceholder.typicode.com/users'
const UserComp = (props) => {
    const [userTodos, setUserTodos] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [showData, setShowData] = useState(false);
    const [showMissions, setShowMissions] = useState(false);
    
  useEffect(() => {
    const fetchData = async() => {
        const {data} = await axios.get(`${tasksUrl}?userId=${props.user.id}&completed=false`);
        setUserTodos(data);
        setName(props.user.name);
        setEmail(props.user.email);
    } 
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps    
  }, []);
  useEffect(() => {
    props.onShowMissions(props.user.id);
  }, [showMissions]);

  const onMouseLeave = () => {setShowData(false);}
  const onMouseOver = () => {setShowData(true);}
  const updateUser = async () => {
    const obj = {
        id: props.user.id,
        name, email,
        address: props.user.address
    }
    await userBLL.updateUser(props.user.id, obj)
}
  
  const deleteUser = async () => {props.onDeleteUser(props.user.id);}
   
  return (
    <div style={{marginBottom: '5px', padding: '5px', backgroundColor: showMissions && props.user.id === props.selectedId? 'orange' : 'white',
    border: userTodos.length > 0? 'solid 2px red' : 'solid 2px green'}}>
        <div onClick={() => setShowMissions(!showMissions)} style={{textDecoration: 'blue underline', cursor: 'pointer'}}>
        ID: {props.user.id} <br/></div>
        Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input><br/>
        Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input><br/>
        <button onClick={onMouseLeave} onMouseOver={onMouseOver}>Other Data</button>
        <button style={{backgroundColor:'#ffff99'}} onClick={updateUser}>Update</button>
        <button style={{backgroundColor:'#ffff99'}} onClick={deleteUser}>Delete</button>
        {showData && <DataComp key={props.user.id} user={props.user}/>}
        </div>
  )
}
export default UserComp;