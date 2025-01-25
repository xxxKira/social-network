const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
  users: [
    {
      userName: 'Liliazxcqwe',
      userId: 123,
      descriptionTitle: 'Pretty cool',
      avatar: 'https://avatarfiles.alphacoders.com/364/364764.jpg',
      followed: true,
    },
    {
      userName: 'qwe',
      userId: 111,
      descriptionTitle: 'Dead Inside',
      avatar: 'https://avatarfiles.alphacoders.com/364/364764.jpg',
      followed: false,
    },
  ],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.userId === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.userId === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

export function followUserAC(userId) {
  return {
    type: FOLLOW,
    userId,
  };
}
export function unfollowUserAC(userId) {
  return {
    type: UNFOLLOW,
    userId,
  };
}
export function setUsersAC(users) {
  return {
    type: SET_USERS,
    users,
  };
}

export default searchReducer;
