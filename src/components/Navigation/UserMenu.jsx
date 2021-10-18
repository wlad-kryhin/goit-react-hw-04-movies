import s from "./Navigation.module.css";
import { ImUserTie } from "react-icons/im";

export default function UserMenu({ userName, logout }) {
  return (
    <div className={s.auth__list}>
      {userName && (
        <p className={s.welcome__user}>
          <ImUserTie size={20} /> Welcome:{" "}
          <span className={s.userName}>{userName}</span>
        </p>
      )}
      <button type="button" className={s.user__button} onClick={() => logout()}>
        Log out
      </button>
    </div>
  );
}
