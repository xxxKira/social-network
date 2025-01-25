import { combineReducers, createStore } from 'redux';
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import searchReducer from './search-reducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  searchPage: searchReducer,
});

const store = createStore(reducers);

export default store;
