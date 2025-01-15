import style from './Profile.module.css';
import { NavLink } from 'react-router';

export default function UserInformation({ profile }) {
  return (
    <section className={style.information}>
      <NavLink to='/profile' className={style.avatar}>
        <img src={profile.avatar} alt='Avatar' />
      </NavLink>
      <p className={style.name}>{profile.username}</p>
      <p className={style.postsInf}>{profile.posts.length} posts</p>
      <p className={style.followers}>
        <NavLink to='/profile/followers'>
          {profile.followers.length} followers
        </NavLink>
      </p>
      <p className={style.following}>
        <NavLink to='/profile/following'>
          {profile.following.length} following
        </NavLink>
      </p>
      <p className={style.userDescriptionTitle}>{profile.descriptionTitle}</p>
      <p className={style.userDescription}>{profile.description}</p>
    </section>
  );
}
