import style from './Profile.module.css';
import UserInformation from './UserInformation';
import AddPostContainer from './AddPostContainer';
import Post from './Post';

export function Profile({ profile }) {
  return (
    <div className={style.profile}>
      <div className={style.content}>
        <UserInformation profile={profile} />
        <AddPostContainer />

        <section className={style.posts}>
          {profile.posts
            .slice()
            .reverse()
            .map((post, i) => (
              <Post
                time={post.date}
                text={post.text}
                likes={post.likes}
                key={i}
              />
            ))}
        </section>
      </div>
    </div>
  );
}
