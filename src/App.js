import React, { useState } from 'react';

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
  const [users, setUsers] = useState(USERS);

  return (
    <div>
      <AddUser />
      <UsersList users={users}/>
    </div>
  );
}

export default App;
