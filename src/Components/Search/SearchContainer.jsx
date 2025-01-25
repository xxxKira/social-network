import { connect } from 'react-redux';
import {
  followUserAC,
  unfollowUserAC,
  setUsersAC,
} from '../../Redux/search-reducer';
import { Search } from './Search';

function mapStateToProps(state) {
  return {
    searchPage: state.searchPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    followUser(userId) {
      dispatch(followUserAC(userId));
    },
    unfollowUser(userId) {
      dispatch(unfollowUserAC(userId));
    },
    setUsers(users) {
      dispatch(setUsersAC(users));
    },
  };
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
