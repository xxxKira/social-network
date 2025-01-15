import style from './Messages.module.css';

export default function Message({ messages, user }) {
  return (
    <>
      <pre
        className={`${style.message} ${
          messages.sender.toLowerCase() === user.toLowerCase()
            ? `${style.myMessage}`
            : `${style.userMessage}`
        }`}
      >
        {messages.message}
      </pre>
    </>
  );
}
