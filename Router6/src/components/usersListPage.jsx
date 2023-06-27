import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';

const UsersListPage = () => {
  const arr = [
    {id: 1, name: "user"},
    {id: 2, name: "user"},
    {id: 3, name: "user"},
    {id: 4, name: "user"},
    {id: 5, name: "user"}
  ];
  
  return ( 
    <>
      <h1>Users List</h1>
      <ul>
        {arr.map((user) => <li key={nanoid()}><Link to={`${user.id}`}>{user.name + " " + user.id}</Link></li>)}
      </ul>
    </>
  );
}

export default UsersListPage;
