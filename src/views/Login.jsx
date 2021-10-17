import { Link } from "react-router-dom";
import { useState } from "react";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);

      default:
        return;
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    //   dispatch(logIn({ email, password }));
    e.target.reset();
    setEmail("");
    setPassword("");
  };
  return (
    <form onSubmit={handleFormSubmit} className="form-container">
      <h3 className="form-title">Login form</h3>
      <label className="label">
        Email
        <input
          className="input"
          onChange={handleInputChange}
          name="email"
          type="email"
          placeholder="name@gmail.com"
          required
        />
      </label>
      <label className="label">
        Password
        <input
          className="input"
          onChange={handleInputChange}
          name="password"
          type="password"
          placeholder="********"
          required
        />
      </label>
      <button type="submit" className="button">
        Log in
      </button>
      <p className="form-desc">
        If you don't have an account , please
        <Link className="link-registration" to="/registration">
          register
        </Link>
      </p>
    </form>
  );
}
