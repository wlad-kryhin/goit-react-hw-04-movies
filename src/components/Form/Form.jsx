import { useState } from "react";
import React from "react";
import PropTypes from "prop-types";

export default function Form({ onSubmit }) {
  const [query, setQuery] = useState("");
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      return alert("write smth other");
    }
    onSubmit(query);
    e.target.reset();
    setQuery("");
  };
  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <label className="form__label">
        Search movies
        <input
          className="form__input"
          type="text"
          value={query}
          name="text"
          onChange={handleInputChange}
          placeholder="Batman"
        />
      </label>
      <button type="submit" className="form__button">
        Search
      </button>
    </form>
  );
}
Form.propTypes = {
  onSubmit: PropTypes.func,
};
