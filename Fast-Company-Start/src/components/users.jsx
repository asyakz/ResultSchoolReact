import React from 'react';
import { useState } from 'react';
import api from "../api"

const Users = () => {

  const [users, setUsers] = useState(api.users.fetchAll());
  const qualitiesClassName = "m-2 badge bg-";

  const handleDelete = (userId) => {
    setUsers(prevState => prevState.filter(user => user._id !== userId));
  };

  const renderPharse = (number) => {

    let tableTitle;

      if (number >= 2 && number <= 4) {
        tableTitle = `${number} человека тусанет с тобой сегодня`;
      } else if (number === 0) {
        tableTitle = "Никто с тобой не тусанет";
      } else if (number === 1) {
        tableTitle = `${number} человек тусанет с тобой сегодня`;
      } else {
        tableTitle = `${number} человек тусанут с тобой сегодня`;
      }

      const getTitleClassName = () => {
        let classes = "m-2 badge bg-";
        classes += number !== 0 ? "primary" : "danger";
        return classes;
      }

    return (
      <>
        <h2>
          <span className={getTitleClassName()}>
            {tableTitle}
            </span>
        </h2>
      </>
    )
  };

  return (
    <>
      {renderPharse(users.length)}
      {users.length > 0 && (
        <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
        {
          users.map((u, i) => (
            <tr key={i} id={i}>
              <td key={u._id + 'name'} id={u._id + 'name'}>{u.name}</td>
              <td key={u._id + i} id={u._id + i}>{u.qualities.map(q => (
                  <span
                        className={qualitiesClassName + q.color}
                        key={q._id}
                        id={q._id}
                        >
                      {q.name}
                  </span>
                ))}
              </td>
              <td key={u.profession._id} id={u.profession._id}>{u.profession.name}</td>
              <td key={u._id + 'meet'} id={u._id + 'meet'}>{u.completedMeetings}</td>
              <td key={u._id + 'prof'} id={u._id + 'prof'}>{u.rate}</td>
              <td key={u._id + 'btn'} id={u._id + 'btn'}>
                <button
                      className="btn bg-danger m-2 text-white"
                      id={u._id}
                      onClick={() => handleDelete(u._id)}
                      >
                  delete
                </button></td>
            </tr>
          ))
        }
        </tbody>
      </table>
      )}
    </>
  )
};

export default Users;

