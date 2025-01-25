import { connect } from 'react-redux';
import { MessagesPage } from './MessagesPage';
import { updateDialogIndex } from '../../Redux/messages-reducer';

function mapStateToProps(state) {
  return {
    messagesPage: state.messagesPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateDialog(userId) {
      dispatch(updateDialogIndex(userId));
    },
  };
}

export const MessagesPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesPage);
