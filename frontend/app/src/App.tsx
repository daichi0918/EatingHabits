import axios from 'axios';
import React, { useState } from 'react';
import './App.css';
import { User } from './User';

type UserType = {
  id: number;
  name: string;
  email: string;
  encrypted_password: string;
  gender: string;
  image: string;
  memo: string;
  created_at: string;
  updated_at: string;
}

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
        <User name={user.name} />
      ))}
    </div>
  );
}

export default App;
