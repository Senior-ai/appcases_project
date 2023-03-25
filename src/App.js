import MainComp from './MainComp'
import { useState } from 'react';
import MissionsComp from './missionsComps/missionsComp';

function App() {
  const [showMissions, setShowMissions] = useState(false);
  const [selectedId, setSelectedId] = useState('');
  const onShowMissions = (id) => {
    if (showMissions && selectedId === id)
    {
      setShowMissions(false);
      setSelectedId(id);
    }
    else
    {
      if (selectedId === '')
      {
        setShowMissions(false)
      }
      else
        setShowMissions(true); 
      setSelectedId(id);
    }
  }
  return (
    <div className="App">
      <MainComp onShowMissions={onShowMissions}></MainComp>
      {showMissions && <MissionsComp key={selectedId} id={selectedId} status={'todosList'} postStatus={'postsList'}/>}
    </div>
  );
}

export default App;
