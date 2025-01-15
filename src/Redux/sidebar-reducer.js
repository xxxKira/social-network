const HANDLE_NAV = 'HANDLE_NAV';

const initialState = {
  navHide: false,
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_NAV:
      state.navHide = action.state;
      return state;
    default:
      return state;
  }
};

export function handleSidebar(state) {
  return {
    type: HANDLE_NAV,
    state: state,
  };
}

export default sidebarReducer;
