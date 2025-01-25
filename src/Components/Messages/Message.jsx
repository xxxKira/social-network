import style from './Messages.module.css';

export default function Message({ messages, user }) {
  return (
    <>
      <pre
        className={`${style.message} ${
          messages.sender.toLowerCase() === user.toLowerCase()
            ? `${style.userMessage}`
            : `${style.myMessage}`
        }`}
      >
        {messages.message}
      </pre>
    </>
  );
}
