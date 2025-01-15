import style from './Messages.module.css';
// import { NavLink, Route, Routes } from 'react-router';
import { MessagesField } from './MessagesField';
import { User } from './User';

export function MessagesPage({ state, dispatch }) {
  return (
    <div className={style.messagesPage}>
      <section className={style.users}>
        <ul className={style.usersList}>
          {state.messagePage.messages.map((el, i) => (
            <User user={el.user} key={i} />
          ))}
        </ul>
      </section>
      {/* <Routes>
        {state.messagePage.messages.map((el, i) => (
          <Route
            path={`/messages/${el.user}`}
            element={<Message messages={el} user={state.username} key={i} />}
          />
        ))}
      </Routes> */}
      <MessagesField state={state} dispatch={dispatch} />
    </div>
  );
}
