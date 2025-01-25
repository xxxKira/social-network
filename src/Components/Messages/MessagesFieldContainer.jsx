import MessagesField from './MessagesField';
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../Redux/messages-reducer';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    messagesPage: state.messagesPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeText(e) {
      const text = e.target.value;
      dispatch(updateNewMessageTextActionCreator(text));
    },
    handleSubmit(e) {
      e.preventDefault();
      dispatch(addMessageActionCreator());
      // btnShowMore.scrollIntoView({ behavior: "smooth" });
      //TODO: scroll in new message
    },
  };
}

const MessagesFieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesField);

export default MessagesFieldContainer;
