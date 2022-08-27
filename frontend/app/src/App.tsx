import React from 'react';
import './App.css';
import { UserCard } from './compenents/UserCard';
import { useAllUsers } from './hooks/useAllUsers'


function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  const onClickFetchUserData = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickFetchUserData}>ユーザーデータ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
            <>
              {userProfiles.map((user) => (
                <UserCard
                  key={user.id}
                  user={user}
                />
              ))}
            </>
          )
      }

    </div>
  );
}

export default App;
