import { NavLink } from 'react-router';
import style from './Search.module.css';
import { Button } from './../Button/Button';

export function Search({ searchPage, followUser, unfollowUser }) {
  return (
    <div className={style.search}>
      <div className={style.content}>
        <form className={style.searchForm}>
          <input
            placeholder='Look for...'
            type='text'
            className={style.searchInput}
          ></input>
          <span className={style.searchUser}>
            <button type='submit' className={style.searchButton}>
              <svg
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className={style.searchIcon}
              >
                <path
                  d='M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </span>
        </form>
        <div className={style.users}>
          <ul className={style.usersList}>
            {searchPage.users.map((user) => (
              <User
                key={user.userId}
                user={user}
                followUser={followUser}
                unfollowUser={unfollowUser}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function User({ user, followUser, unfollowUser }) {
  function handleSubmit(e) {
    e.preventDefault();
    if (user.followed) {
      unfollowUser(user.userId);
    }
    if (!user.followed) {
      followUser(user.userId);
    }
  }

  return (
    <li className={style.user}>
      <NavLink to={`/${user.userName}`} className={style.userLink}>
        <img src={user.avatar} alt='Avatar' className={style.avatar} />
        <h3 className={style.userName}>{user.userName}</h3>
        <span className={style.userDescription}>{user.descriptionTitle}</span>
      </NavLink>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Button className={style.button}>
          {user.followed ? 'Unfollow' : 'Follow'}
        </Button>
      </form>
    </li>
  );
}
