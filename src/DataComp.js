import {useState, useEffect} from 'react'

const DataComp = (props) => {
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const dataDiv = {
        border: '1px solid black',
        borderRadius: '15px',
        width: '250px',
        height: '80px',
        padding: '5px',
        margin: '10px auto',
        backgroundColor: 'white'
    }
    useEffect(() => {
        setStreet(props.user.address.street);
        setCity(props.user.address.city);
        setZip(props.user.address.zipcode);
        // eslint-disable-next-line react-hooks/exhaustive-deps  
    }, []);
    return (
    <div style={dataDiv}>
        Street: <input type="text" value={street} onChange={(e) => setStreet(e.target.value)}/> <br/>
        City: <input type="text" value={city} onChange={(e) => setCity(e.target.value)}/> <br/>
        Zip Code: <input type="text" value={zip} onChange={(e) => setZip(e.target.value)}/>
    </div>
  )
}
export default DataComp;