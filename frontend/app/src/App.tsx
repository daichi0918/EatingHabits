import axios from 'axios';
import React, { useState } from 'react';
import './App.css';
import { User } from './User';

function App() {
  const [users, setUsers] = useState<any>([]);
  const onClickFetchUserData = () => {
    axios.get("http://localhost:3002/api/v1/users").then((res) => {
      setUsers(res.data.users)
    })
  }
  return (
    <div className="App">
      <button onClick={onClickFetchUserData}>ユーザーデータ取得</button>
      {users.map((user) => (
        <User name={user.name} />
      ))}
    </div>
  );
}

export default App;
