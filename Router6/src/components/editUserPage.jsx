import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditUserPage = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goToAnotherUser = () => {
    navigate(id < 5 ? `/userslist/${Number(id) + 1 }` : `/userslist/1`)
  }
  return (
    <>
      <h3>{`Редактировать пользователя #${id}`}</h3>
      <button onClick={goBack}>Вернуться к пользователю</button>
      <button onClick={goToAnotherUser}>Другой пользователь</button>
    </>
  );
}

export default EditUserPage;
