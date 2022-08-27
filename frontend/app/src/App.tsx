import axios from 'axios';
import React from 'react';
import './App.css';

function App() {
  const onClickFetchUserData = () => {
    axios.get("http://localhost:3002/api/v1/users").then((res) => {
      console.log(res)
    })
  }
  return (
    <div className="App">
      <button onClick={onClickFetchUserData}>ユーザーデータ取得</button>
    </div>
  );
}

export default App;
