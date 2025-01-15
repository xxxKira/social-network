import style from './Profile.module.css';
import { Button } from './../Button/Button';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from './../../Redux/profile-reducer';

export default function AddPost({ profile, dispatch }) {
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addPostActionCreator());
  }
  function onPostChange(e) {
    const text = e.target.value;
    dispatch(updateNewPostTextActionCreator(text));
  }
  return (
    <section className={style.addPost}>
      <form onSubmit={handleSubmit}>
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
          onChange={onPostChange}
        ></textarea>
        <Button className={style.button}>Add post</Button>
      </form>
    </section>
  );
}
