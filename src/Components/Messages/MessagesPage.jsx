import { useParams } from 'react-router';
import style from './Messages.module.css';
import MessagesFieldContainer from './MessagesFieldContainer';
import { User } from './User';
import { useEffect } from 'react';

export function MessagesPage({ messagesPage, updateDialog }) {
  const { userId } = useParams();
  console.log(messagesPage);
  useEffect(() => {
    updateDialog(Number(userId));
  }, [userId]);
  return (
    <div className={style.messagesPage}>
      <section className={style.users}>
        <ul className={style.usersList}>
          {messagesPage.dialogs.map((el, i) => (
            <User user={el} key={i} />
          ))}
        </ul>
      </section>
      {/* {messagesPage.dialogIndex !== null && <MessagesFieldContainer />} */}
      {userId && <MessagesFieldContainer />}
    </div>
  );
}
