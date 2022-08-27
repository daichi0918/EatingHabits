import axios from 'axios';
import React, { useState } from 'react';
import './App.css';
import { UserType } from './types/user';
import { User } from './User';


function App() {
  const [users, setUsers] = useState<Array<UserType>>([]);
  const onClickFetchUserData = () => {
    axios.get<any>("http://localhost:3002/api/v1/users").then((res) => {
      console.log(res)
      setUsers(res.data.users)
    })
  }
  return (
    <div className="App">
      <button onClick={onClickFetchUserData}>ユーザーデータ取得</button>
      {users.map((user) => (
        <User
          key={user.id}
          name={user.name}
          email={user.email}
        />
      ))}
    </div>
  );
}

export default App;
