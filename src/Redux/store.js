import messagesReducer from './messages-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

const store = {
  _state: {
    sidebar: {
      navHide: false,
    },
    profilePage: {
      username: 'Kir.S',
      userId: crypto.randomUUID,
      avatar: 'https://death-notes.github.io/img/portrait/light-foto.jpg',
      followers: ['213', 'zxc', 'Ghoul'],
      following: ['mam', 'zxcLilia'],
      posts: [
        {
          date: new Date(),
          text: 'Hello my friend!',
          likes: 0,
          comments: ['wow'],
        },
        { date: new Date(), text: "I'm Kira", likes: 1, comments: [] },
        { date: new Date(), text: 'Zxc', likes: 5, comments: ['qwe'] },
        { date: new Date(), text: '...', likes: 20000, comments: [] },
      ],
      postText: '',
    },
    messagePage: {
      messageText: '',
      messages: [
        {
          user: 'Liliazxcqwe',
          messages: [
            {
              date: new Date(2024, 11, 28, 14, 38),
              message: `Hellow!\n How are youuuuu ?`,
              sender: 'Kir.s',
            },
            { date: new Date(), message: `Hi\nI'm ok!`, sender: 'Lilia' },
            { date: new Date(), message: 'How are you?', sender: 'Kir.s' },
          ],
        },
      ],
      messageIndex: 0,
    },
  },
  _rerenderEntireTree() {},

  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagePage = messagesReducer(this._state.messagePage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._rerenderEntireTree();
  },
};

export default store;
