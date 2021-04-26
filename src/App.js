import { useState } from "react";
import { createData } from "./createData";
import "./App.css";

function App() {
  const initialState = createData(500);
  const [users, setUsersData] = useState(initialState);

  const editUser = (e, userBeingEdited, indexOfUserBeingEdited) => {
    const editedItem = {
      ...userBeingEdited,
      [e.target.name]: e.target.value,
    };

    if (indexOfUserBeingEdited > -1) {
      setUsersData((users) => [
        ...users.slice(0, indexOfUserBeingEdited),
        editedItem,
        ...users.slice(indexOfUserBeingEdited + 1),
      ]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {users.map((user, index) => (
          <User
            user={user}
            key={user.id}
            handleChange={editUser}
            itemIndex={index}
          />
        ))}
      </header>
    </div>
  );
}

const User = ({ user, handleChange, itemIndex }) => {
  const { firstName, lastName, totalTimeLivedinSeconds } = user;
  const totalTimeLivedInDays = () => {
    return Math.floor(parseFloat(totalTimeLivedinSeconds) / (3600 * 24));
  };
  console.log(totalTimeLivedInDays, 888);

  return (
    <div className="input-row">
      <div>
        <input
          type="text"
          value={firstName}
          name="firstName"
          onChange={(e) => handleChange(e, user, itemIndex)}
        />
      </div>
      <div>
        <input
          type="text"
          value={lastName}
          name="lastName"
          onChange={(e) => handleChange(e, user, itemIndex)}
        />
      </div>
      <div>
        <input
          type="text"
          value={totalTimeLivedinSeconds}
          name="totalTimeLivedinSeconds"
          onChange={(e) => handleChange(e, user, itemIndex)}
        />
      </div>
      <div className="time-in-days">{totalTimeLivedInDays()}</div>
    </div>
  );
};

export default App;
