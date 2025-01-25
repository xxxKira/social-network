import style from './Messages.module.css';
import { NavLink } from 'react-router';

export function User({ user }) {
  return (
    <li
      title={user.userName}
      // className={style.user}
      // onClick={() => updateDialogIndex(user.userId)}
    >
      <NavLink to={`/messages/${user.userId}`} className={style.user}>
        {user.userName}
      </NavLink>
    </li>
  );
}
