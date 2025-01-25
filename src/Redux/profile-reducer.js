const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
  username: 'Kir.S',
  userId: crypto.randomUUID,
  avatar: 'https://death-notes.github.io/img/portrait/light-foto.jpg',
  descriptionTitle: 'ZXcxz',
  description: 'Hello, my name Kir.s!',
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
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const text = state.postText;
      if (text.length === 0) return state;
      const post = {
        date: new Date(),
        text: text,
        likes: 0,
        comments: [],
      };

      return {
        ...state,
        posts: [...state.posts, post],
        postText: '',
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        postText: action.newText,
      };
    default:
      return state;
  }
};

export function addPostActionCreator() {
  return {
    type: ADD_POST,
  };
}
export function updateNewPostTextActionCreator(text) {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
}

export default profileReducer;
