import React from 'react'

const AddUserComp = () => {
    const style = {border: 'solid 2px black', padding: '3px'}
    return (
    <div>
        Add new user<br/>
        <div style={style}>
            Name: <input type="text"></input><br/>
            Email: <input type="text"></input><br/><br/>
            <button style={{backgroundColor: '#FFFACD'}}>Cancel</button>
            <button style={{backgroundColor: '#FFFACD'}}>Add</button>
        </div>
    </div>
  )
}
export default AddUserComp