import { useState } from "react";
export default function Registration({ callback }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");

  const handleInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      case "repPassword":
        return setRepPassword(value);

      default:
        return;
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (password !== repPassword) {
      return alert("Password not correct");
    }

    callback({ name, email, password });
    // dispatch(register({ name, email, password }));
    e.target.reset();
    setName("");
    setEmail("");
    setPassword("");
    setRepPassword("");
  };
  return (
    <form onSubmit={handleFormSubmit} className="form-container">
      <h3 className="form-title">Registration form</h3>
      <label className="label">
        Name
        <input
          className="input"
          onChange={handleInputChange}
          type="text"
          name="name"
          placeholder="Katty"
          required
        />
      </label>
      <label className="label">
        Email
        <input
          // pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/"
          className="input"
          onChange={handleInputChange}
          type="email"
          name="email"
          placeholder="name@gmail.com"
          required
        />
      </label>
      <label className="label">
        Password
        <input
          className="input"
          onChange={handleInputChange}
          type="password"
          name="password"
          placeholder="********"
          // pattern="/^[A-Z0-9_-]{8,12}$/"
          required
        />
      </label>
      <label className="label">
        Repeat password
        <input
          // pattern="/^[A-Z0-9_-]{8,12}$/"
          className="input"
          onChange={handleInputChange}
          type="password"
          name="repPassword"
          placeholder="********"
          required
        />
      </label>
      <button type="submit" className="button">
        Register
      </button>
    </form>
  );
}
