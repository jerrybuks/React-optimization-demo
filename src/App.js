import { useState } from 'react';
import { createData } from './createData';
import './App.css';


function App() {
  const initialState = createData(500)
  const [users, setUsersData] = useState(initialState)

  const editUser = (e,userBeingEdited) => {
    const indexOfUserBeingEdited = users.findIndex((user) => user.id === userBeingEdited.id );
   
     const editedItem = {
        ...userBeingEdited,
        [e.target.name]: e.target.value
      }
    
    

    if(indexOfUserBeingEdited > -1){
      setUsersData([
        ...users.slice(0,indexOfUserBeingEdited),
        editedItem,
        ...users.slice(indexOfUserBeingEdited+1)
      ])
    }
  }

  return (
    <div className="App">
      <header className="App-header">
            {
              users.map((user) => <User user={user} key={user.id} handleChange={editUser} />)
            }        
      </header>
    </div>
  );
}

const User = ({user,handleChange}) => {
  const {firstName, lastName, totalTimeLivedinSeconds } = user;
  const totalTimeLivedInDays= () => {
    return  Math.floor(parseFloat(totalTimeLivedinSeconds)/ (3600*24));
   }
   console.log(totalTimeLivedInDays,888)

  return (
    <div className="input-row">
    <div><input type="text" value={firstName} name="firstName" onChange={(e) => handleChange(e,user)} /></div>
    <div><input type="text" value={lastName} name="lastName" onChange={(e) => handleChange(e,user)}/></div>
    <div><input type="text" value={totalTimeLivedinSeconds} name="totalTimeLivedinSeconds" onChange={(e) => handleChange(e,user)}/></div>
    <div className="time-in-days">{totalTimeLivedInDays()}</div>
  </div>
  )
}

export default App;
