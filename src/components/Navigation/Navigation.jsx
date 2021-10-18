import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu";
export default function Navigation({ userName, logged, logout }) {
  return (
    <nav className={s.nav}>
      <ul className={s.nav__list}>
        <li className={s.nav__list_item}>
          <NavLink
            exact
            to="/"
            activeClassName={s.active_link}
            className={s.link}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            activeClassName={s.active_link}
            className={s.link}
          >
            MOVIES
          </NavLink>
        </li>
      </ul>
      {logged ? <UserMenu userName={userName} logout={logout} /> : <AuthNav />}
    </nav>
  );
}
