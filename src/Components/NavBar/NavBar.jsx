import { useState } from 'react';
// import { handleSidebar } from '../../Redux/sidebar-reducer';
import style from './NavBar.module.css';
import { NavLink } from 'react-router';

export function NavBar({ state }) {
  const [hideNav, setHideNav] = useState(
    window.location.href.includes('messages')
  );

  return (
    <div className={`${style.navigation} ${hideNav ? `${style.navHide}` : ''}`}>
      <span className={style.logo}>
        <NavLink to='/home' className={style.logoLink}>
          <svg
            viewBox='0 0 128 128'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
            role='img'
            className={style.logoIcon}
            preserveAspectRatio='xMidYMid meet'
          >
            <path d='M102.61 107.83c10.8-9.85 16.84-24.08 16.84-39.9c0-29.73-21.33-53.82-55.45-53.82S8.55 38.21 8.55 67.93c0 29.73 21.33 53.82 55.45 53.82c7.69 0 14.72-1.23 21.01-3.47l5.97 8.54a2.079 2.079 0 0 0 2.28.81l16.51-4.75c.64-.19 1.16-.67 1.39-1.31c.22-.63.13-1.33-.26-1.89l-8.29-11.85zM64 95.89c-17.72 0-28.81-12.52-28.81-27.96S46.27 39.97 64 39.97s28.81 12.52 28.81 27.96c0 6.65-2.07 12.76-5.82 17.56l-7.26-10.38a2.086 2.086 0 0 0-2.28-.81l-16.52 4.75c-.64.19-1.16.67-1.39 1.31c-.22.63-.13 1.33.26 1.89l9.27 13.25c-1.62.24-3.3.39-5.07.39z'></path>
          </svg>
        </NavLink>
      </span>
      <nav>
        <ul className={style.list}>
          <Item onHideNav={setHideNav}>
            <svg
              viewBox='0 0 16 16'
              xmlns='http://www.w3.org/2000/svg'
              className={`${style.icons} ${style.iconHome}`}
            >
              <g id='SVGRepo_bgCarrier' strokeWidth='0' />

              <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'
              />

              <g id='SVGRepo_iconCarrier'>
                {' '}
                <path d='M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z' />{' '}
              </g>
            </svg>
            <span className={style.listItemName}>Home</span>
          </Item>

          <Item onHideNav={setHideNav}>
            <svg
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              className={style.icons}
            >
              <path
                d='M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <span className={style.listItemName}>Search</span>
          </Item>

          <Item onHideNav={setHideNav}>
            <svg viewBox='0 0 24 24' fill='none' className={style.icons}>
              <path
                d='M7.76953 4.58009C8.57706 3.74781 9.54639 3.08958 10.6178 2.64588C11.6892 2.20219 12.84 1.98233 13.9995 2.00001C18.4195 2.00001 21.9995 5.10005 21.9995 8.92005C21.9792 9.98209 21.7021 11.0234 21.1919 11.9551C20.6817 12.8867 19.9535 13.681 19.0696 14.27V16.75'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M16 13.64C16 10.29 12.87 7.58008 9 7.58008C5.13 7.58008 2 10.29 2 13.64C2.01941 14.5684 2.26227 15.4785 2.70789 16.2931C3.1535 17.1077 3.78881 17.803 4.56006 18.3201V20.49C4.55903 20.7858 4.64489 21.0755 4.80701 21.3229C4.96912 21.5703 5.20032 21.7647 5.47192 21.8818C5.74353 21.999 6.04362 22.0338 6.33484 21.9819C6.62606 21.9301 6.89553 21.7938 7.10999 21.5901L9.10999 19.6901C12.94 19.6201 16 16.94 16 13.64Z'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>

            <span className={style.listItemName}>Messages</span>
          </Item>
          <Item onHideNav={setHideNav}>
            <svg
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              className={style.icons}
            >
              <path
                d='M15 19.25C15 20.0456 14.6839 20.8087 14.1213 21.3713C13.5587 21.9339 12.7956 22.25 12 22.25C11.2044 22.25 10.4413 21.9339 9.87869 21.3713C9.31608 20.8087 9 20.0456 9 19.25'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M5.58096 18.25C5.09151 18.1461 4.65878 17.8626 4.36813 17.4553C4.07748 17.048 3.95005 16.5466 4.01098 16.05L5.01098 7.93998C5.2663 6.27263 6.11508 4.75352 7.40121 3.66215C8.68734 2.57077 10.3243 1.98054 12.011 1.99998V1.99998C13.6977 1.98054 15.3346 2.57077 16.6207 3.66215C17.9069 4.75352 18.7557 6.27263 19.011 7.93998L20.011 16.05C20.0723 16.5452 19.9462 17.0454 19.6576 17.4525C19.369 17.8595 18.9386 18.144 18.451 18.25C14.2186 19.2445 9.81332 19.2445 5.58096 18.25V18.25Z'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <span className={style.listItemName}>Notification</span>
          </Item>
          <Item onHideNav={setHideNav}>
            <img
              src={state.profilePage.avatar}
              alt='User Avatar'
              className={`${style.icons} ${style.userAvatar}`}
            />
            <span className={style.listItemName}>Profile</span>
          </Item>
        </ul>
      </nav>
    </div>
  );
}

function Item({ children, onHideNav }) {
  return (
    <li
      className={style.listItem}
      title={children[1].props.children}
      onClick={() => onHideNav(window.location.href.includes('messages'))}
    >
      <NavLink
        to={`/${children[1].props.children.toLowerCase()}`}
        className={style.listLink}
      >
        {children}
      </NavLink>
    </li>
  );
}
