import { NavBar } from './Components/NavBar/NavBar';
import { Profile } from './Components/Profile/Profile';
import { MessagesPage } from './Components/Messages/Messages';
import './index.css';
import { Route, Routes } from 'react-router';
import { handleSidebar } from './Redux/sidebar-reducer';

function App({ state, dispatch }) {
  window.addEventListener('load', () => {
    if (window.location.href.includes('messages')) {
      dispatch(handleSidebar(true));
    }
  });

  return (
    <div className='App dark--mode'>
      <NavBar state={state} dispatch={dispatch} />
      <Routes>
        <Route
          path='/profile'
          element={<Profile profile={state.profilePage} dispatch={dispatch} />}
        />
        <Route
          path='/messages'
          element={<MessagesPage state={state} dispatch={dispatch} />}
        />
        {/* <Route path='/profile' element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;
