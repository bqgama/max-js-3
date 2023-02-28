import React, { useState, Fragment } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const USERS = [
  {
    id: 'u1',
    name: 'Pedro',
    age: 31,
  },
];


function App() {
  const [usersList, setUsersList] = useState(USERS);

  const addUserHandler = (enteredUserData) => {
    console.log(enteredUserData);

    setUsersList((prevUsers) => {
      return [...prevUsers, enteredUserData];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList}/>
    </Fragment>
  );
}

export default App;
