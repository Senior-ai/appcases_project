import MainComp from './MainComp'
import { useState, useEffect } from 'react';
import MissionsComp from './missionsComps/missionsComp';
import AddUserComp from './createComps/AddUserComp';
import userBLL from './BLL/userBLL'
function App() {
  const [showMissions, setShowMissions] = useState(false);
  const [userStatus, setUserStatus] = useState(false);
  const [selectedId, setSelectedId] = useState('');
  const [users, setUsers] = useState([]);
  
  const onShowMissions = (id) => {
    if (showMissions && selectedId === id)
    {
      setShowMissions(false);
    }
    else
    {
      if (selectedId === '')
      {
        setShowMissions(false)
      }
      else
        setShowMissions(true); 
    }
    setSelectedId(id);
  }

  const showAddUser = () => {
    setUserStatus(!userStatus);
  }
  useEffect(() => {
    const fetchData = async () => {
         const data = await userBLL.getCurrentUsers();
         setUsers(data);
         console.log(data);
    }
    fetchData(); 
 }, []);
 const delUser = async (userId) => {
  const updatedUsers = await userBLL.deleteUser(userId);
  setUsers(updatedUsers);
 }
 
  return (
    <div className="App">
      <MainComp onShowMissions={onShowMissions} showAddUser={showAddUser} selectedId={selectedId} users={users}
      delUser={delUser}></MainComp>
      {userStatus === false? 
      (showMissions && <MissionsComp key={selectedId} id={selectedId} status={'todosList'} postStatus={'postsList'}/>) :
      (<AddUserComp showAddUser={showAddUser} updateUserList={setUsers} users={users} resetId={setSelectedId}></AddUserComp>)}
    </div>
  );
}

export default App;
