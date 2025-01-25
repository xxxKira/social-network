import { connect } from 'react-redux';
import { NavBar } from './NavBar';

function mapStateToProps(state) {
  return {
    state: state,
  };
}

export const NavBarContainer = connect(mapStateToProps)(NavBar);
