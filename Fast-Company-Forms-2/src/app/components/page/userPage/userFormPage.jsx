import React from "react";
import UserFormEdit from "../../ui/userFormEdit";
import { useParams } from "react-router-dom";

const UserFormPage = () => {
  const params = useParams();
  const { userId } = params;

  return <UserFormEdit id={userId}/>;
};

export default UserFormPage;
