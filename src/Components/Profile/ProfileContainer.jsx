import { Profile } from './Profile';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    profile: state.profilePage,
  };
}

export const ProfileContainer = connect(mapStateToProps)(Profile);
