import style from './Messages.module.css';
import { NavLink } from 'react-router';

export function User({ user }) {
  return (
    <li title={user}>
      <NavLink to={`/messages/${user.toLowerCase()}`} className={style.user}>
        {user}
      </NavLink>
    </li>
  );
}
