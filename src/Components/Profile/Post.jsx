import style from './Profile.module.css';

export default function Post({ time, text, likes }) {
  const formatter = new Intl.DateTimeFormat(navigator.language, {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
  const likesFormatter = new Intl.NumberFormat(navigator.language);
  return (
    <div className={style.post}>
      <h4>{formatter.format(time)}</h4>
      <p>{text}</p>
      <p>{likesFormatter.format(likes)} likes</p>
    </div>
  );
}
