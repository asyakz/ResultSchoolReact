import React from 'react';
import { useParams, Link, useNavigate, Outlet} from 'react-router-dom';


const User = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <>
      <h2>User {id}</h2>
      <p>Страница пользователя № {id}</p>
        <button onClick={goBack}>Вернуться к пользователям</button>
        <button><Link to={`edit`}>Редактировать</Link></button>
        <Outlet />
    </>
  );
}

export default User;
