import React from "react";
import PropTypes from "prop-types";

const SearchUser = ({ handleChange, search }) => {
  return (
    <div className="input-group">
      <input
        type="search"
        value={search}
        onChange={handleChange}
        className="form-control rounded"
        placeholder="Search..."
        aria-label="Search"
        aria-describedby="search-addon" />
    </div>
  );
};

SearchUser.propTypes = {
  handleChange: PropTypes.func,
  search: PropTypes.string
};

export default SearchUser;
