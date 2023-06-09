import React from "react";
import UsersListPage from "../components/page/usersListPage/usersListPage";
import UserPage from "../components/page/userPage";
import { useParams } from "react-router-dom";
import EditUserPage from "../components/ui/editUserPage";

const Users = () => {
  const params = useParams();

  const { userId, edit } = params;

  return (
    <>
      {userId ? (
        edit ? (
          <EditUserPage />
        ) : (
          <UserPage userId={userId} />
        )
      ) : (
        <UsersListPage />
      )}
    </>
  );
};

export default Users;
