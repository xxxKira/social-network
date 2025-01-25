const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const UPDATE_DIALOG_INDEX = 'UPDATE_DIALOG_INDEX';

const initialState = {
  messageText: '',
  dialogIndex: null,
  dialogs: [
    {
      userName: 'Liliazxcqwe',
      userId: 123,
      messages: [
        {
          date: new Date(2024, 11, 28, 14, 38),
          message: `Hellow!\n How are youuuuu ?`,
          sender: 'Kir.s',
        },
        { date: new Date(), message: `Hi\nI'm ok!`, sender: 'Liliazxcqwe' },
        { date: new Date(), message: 'How are you?', sender: 'Kir.s' },
        { date: new Date(), message: 'How are you?', sender: 'Kir.s' },
        { date: new Date(), message: 'How are you?', sender: 'Kir.s' },
        { date: new Date(), message: 'How are you?', sender: 'Kir.s' },
        { date: new Date(), message: 'How are you?', sender: 'Kir.s' },
        { date: new Date(), message: 'How are you?', sender: 'Kir.s' },
        { date: new Date(), message: 'How are you?', sender: 'Kir.s' },
        { date: new Date(), message: 'How are you?', sender: 'Kir.s' },
        { date: new Date(), message: 'How are you?', sender: 'Kir.s' },
        { date: new Date(), message: 'How are you?', sender: 'Kir.s' },
        { date: new Date(), message: 'How are you?', sender: 'Kir.s' },
        { date: new Date(), message: 'How are you?', sender: 'Kir.s' },
        { date: new Date(), message: 'How are you?', sender: 'Kir.s' },
        { date: new Date(), message: 'How are you?', sender: 'Kir.s' },
        { date: new Date(), message: 'How are you?', sender: 'Kir.s' },
        { date: new Date(), message: 'How are you?', sender: 'Kir.s' },
      ],
    },
    {
      userName: 'qwe',
      userId: 111,
      messages: [
        {
          date: new Date(2024, 11, 28, 14, 38),
          message: `Hellow!\n How are youuuuu ?`,
          sender: 'Kir.s',
        },
      ],
    },
  ],
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const text = state.messageText;
      if (text.length === 0 || state.dialogIndex === null) return state;
      const message = { date: new Date(), message: text, sender: 'Kir.s' };
      return {
        ...state,
        messageText: '',
        dialogs: state.dialogs.map((dialog) => {
          if (dialog.userId === state.dialogIndex) {
            return { ...dialog, messages: [...dialog.messages, message] };
          }
          return dialog;
        }),
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        messageText: action.newText,
      };
    case UPDATE_DIALOG_INDEX:
      return {
        ...state,
        dialogIndex: action.userId,
      };
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
export function updateDialogIndex(userId) {
  return {
    type: UPDATE_DIALOG_INDEX,
    userId: userId,
  };
}

export default messagesReducer;
