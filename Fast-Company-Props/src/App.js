import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";

function App() {

  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user._id !== userId));
  }

  const handleToggleBookMark = (id) => {
    setUsers(users.map(user => user._id === id ? {...user, bookmark: !user.bookmark} : user));
  }

  return (
    <>
      <h2>
        <span className={"m-2 badge bg-" + (users.length > 0 ? "primary":"danger")}>
          <SearchStatus length={users.length}/>
        </span>
      </h2>
      {users.length > 0 &&
        <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col">Избранное</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <Users users={users} onDelete={handleDelete} onBookMark={handleToggleBookMark}/>
        </tbody>
      </table>
      }
    </>
  );
};

export default App;

