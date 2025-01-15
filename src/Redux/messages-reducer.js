const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const initialState = {
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
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const text = state.messageText;
      if (text.length === 0 || state.messageIndex === null) return state;
      const message = { date: new Date(), message: text, sender: 'Kir.s' };
      state.messageText = '';
      state.messages[state.messageIndex].messages.push(message);
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.messageText = action.newText;
      return state;
    default:
      return state;
  }
};

export function addMessageActionCreator() {
  return {
    type: ADD_MESSAGE,
  };
}
export function updateNewMessageTextActionCreator(text) {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
  };
}

export default messagesReducer;
