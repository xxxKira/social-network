import { ProfileContainer } from './Components/Profile/ProfileContainer';
import { MessagesPageContainer } from './Components/Messages/MessagesPageContainer';
import SearchContainer from './Components/Search/SearchContainer';
import './index.css';
import { Route, Routes } from 'react-router';
import { NavBarContainer } from './Components/NavBar/NavBarContainer';

function App() {
  return (
    <div className='App dark--mode'>
      <NavBarContainer />
      <Routes>
        <Route path='/profile' element={<ProfileContainer />} />
        <Route path='/messages/' element={<MessagesPageContainer />} />
        <Route path='/messages/:userId' element={<MessagesPageContainer />} />
        <Route path='/search/' element={<SearchContainer />} />
        {/* <Route path='/profile' element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;
