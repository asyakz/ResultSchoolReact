import React, { useEffect, useState } from "react";
import { validator } from "../../../utils/validator";
import TextAreaField from "../form/textAreaField";
import SelectField from "../form/selectField";
import api from "../../../api";
import PropTypes from "prop-types";
const initialData = { userId: "", content: "" };

const AddCommentForm = ({ onSubmit }) => {
  const [data, setData] = useState(initialData);
  const [users, setUsers] = useState({});
  const [errors, setErrors] = useState({});
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };
  const validatorConfig = {
    userId: {
      isRequired: {
        message: "Выберите от чьего имени хотите отправить сообщение"
      },
      content: {
        message: "Сообщение не может быть пустым"
      }
    }
  };
  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  useEffect(() => {
    api.users.fetchAll().then(setUsers);
  }, []);
  const clearForm = () => {
    setData(initialData);
    setErrors({});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    onSubmit(data);
    clearForm();
  };
  console.log("users:", users);
  const arrayOfUsers =
    users &&
    Object.keys(users).map((userId) => ({
      label: users[userId].name,
      value: users[userId]._id
    }));
  return (
    <div>
      {console.log("arrayOfUsers:", arrayOfUsers)}
      <h2>New comment</h2>
      <form onSubmit={handleSubmit}>
        <SelectField
          defaultOption="Выберите пользователя"
          options={arrayOfUsers}
          name="userId"
          onChange={handleChange}
          value={data.userId}
          error={errors.userId}
        />
        <TextAreaField
          label="Сообщение"
          name="content"
          value={data.content}
          onChange={handleChange}
          error={errors.content}
        />
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary">Опубликовать</button>
        </div>
      </form>
    </div>
  );
};
AddCommentForm.propTypes = {
  onSubmit: PropTypes.func
};

export default AddCommentForm;
