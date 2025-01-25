import style from './Profile.module.css';
import { Button } from './../Button/Button';

export default function AddPost({ profile, onSubmit, updateNewPostText }) {
  return (
    <section className={style.addPost}>
      <form onSubmit={onSubmit}>
        <label name='post' htmlFor='postText'>
          {profile.posts.length === 0
            ? 'Add your first post!'
            : 'Add a new post!'}
        </label>
        <textarea
          id='postText'
          className={style.postsTextfield}
          placeholder='Enter your post message...'
          value={profile.postText}
          onChange={updateNewPostText}
        ></textarea>
        <Button>Add post</Button>
      </form>
    </section>
  );
}
