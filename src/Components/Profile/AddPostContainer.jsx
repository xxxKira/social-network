import AddPost from './AddPost';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../Redux/profile-reducer';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    profile: state.profilePage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit(e) {
      e.preventDefault();
      dispatch(addPostActionCreator());
    },
    updateNewPostText(e) {
      const text = e.target.value;
      dispatch(updateNewPostTextActionCreator(text));
    },
  };
}

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);

export default AddPostContainer;
