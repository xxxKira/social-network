import style from './Button.module.css';

export function Button({ children }) {
  return <button className={style.button}>{children}</button>;
}
