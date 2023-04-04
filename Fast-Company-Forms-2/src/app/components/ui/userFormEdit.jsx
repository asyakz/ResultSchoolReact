import React from "react";
import { validator } from "../../utils/validator";
import TextField from "../form/textField";
import SelectField from "../form/selectField";
import RadioField from "../form/radioField";
import MultiSelectField from "../form/multiSelectField";
import api from "../../api";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const UserFormEdit = ({ id }) => {
  const [user, setUser] = React.useState();
  const [errors, setErrors] = React.useState({});
  const [data, setData] = React.useState();
  const [qualities, setQualities] = React.useState({});
  const [professions, setProfession] = React.useState();
  const history = useHistory();

  const comeBack = () => {
    history.push(`/users/${id}`);
  };

  React.useEffect(() => {
    api.users.getById(id).then((data) => {
      setUser(data);
      setData((prevState) => ({
        ...prevState,
        _id: data._id,
        name: data.name,
        email: data.email,
        profession: data.profession,
        sex: data.sex,
        qualities: data.qualities.map(quality => ({
          label: quality.name,
          value: quality._id
        }))
      }));
    }
    );
  }, []);

  React.useEffect(() => {
    api.professions.fetchAll().then((data) => {
      setProfession(data);
    });
  }, []);

  React.useEffect(() => {
    api.qualities.fetchAll().then((data) => {
      setQualities(data);
    });
  }, []);

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const validatorConfig = {
    name: {
      isRequired: {
        message: "Обязательно заполните строку с именем"
      }
    },
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения"
      },
      isEmail: {
        message: "Email введен некорректно"
      }
    }
  };
  React.useEffect(() => {
    validate();
  }, [data]);
  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;
  const transformToUserModel = (data) => {
    return (
      {
        _id: data._id,
        name: data.name,
        email: data.email,
        sex: data.sex,
        profession: professions.find((prof) => prof.name === data.profession),
        qualities: data.qualities.map((q) => {
          return Object.values(qualities).find((qual) => qual._id === q.value);
        })
      }
    );
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    api.users.update(data._id, transformToUserModel(data));
    comeBack();
  };
  if (user && professions && qualities) {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3 shadow p-4">
            <form onSubmit={handleUpdate}>
              <TextField
                label="Имя"
                name="name"
                value={data.name}
                onChange={handleChange}
                error={errors.name}
              />
              <TextField
                label="Электронная почта"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
              />
              <SelectField
                label="Выберите вашу профессию"
                defaultOption="Choose..."
                name="profession"
                options={professions}
                onChange={handleChange}
                value={data.profession}
                error={errors.profession}
              />
              <RadioField
                options={[{ name: "Male", value: "male" }, { name: "Female", value: "female" }]}
                value={data.sex}
                name="sex"
                onChange={handleChange}
                label="Выберите ваш пол"
              />
              <MultiSelectField
                options={qualities}
                onChange={handleChange}
                defaultValue={data.qualities}
                name="qualities"
                label="Выберите ваши качества"
              />
              <button
                className="btn btn-primary w-100 mx-auto"
                type=""
                disabled={!isValid}
              >
                Обновить
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
};

UserFormEdit.propTypes = {
  id: PropTypes.string
};

export default UserFormEdit;
