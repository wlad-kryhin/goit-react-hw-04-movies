import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
export default function AuthNav(params) {
  return (
    <ul className={s.auth__list}>
      <li className={s.auth__item}>
        <NavLink
          to="/registration"
          activeClassName={s.active_link}
          className={s.link}
        >
          REGISTRATION
        </NavLink>
      </li>
      <li className={s.auth__item}>
        <NavLink to="/login" activeClassName={s.active_link} className={s.link}>
          LOG IN
        </NavLink>
      </li>
    </ul>
  );
}
