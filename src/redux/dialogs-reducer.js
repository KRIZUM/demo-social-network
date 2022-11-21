const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Vlad',
            img: 'src = https://www.easy-profile.com/support.html?controller=attachment&task=download&tmpl=component&id=2883'
        },
        {
            id: 2,
            name: 'Stas',
            img: 'src =https://www.easy-profile.com/support.html?controller=attachment&task=download&tmpl=component&id=2883'
        },
        {
            id: 3,
            name: 'Sasha',
            img: ' src =https://www.easy-profile.com/support.html?controller=attachment&task=download&tmpl=component&id=2883'
        },
        {
            id: 4,
            name: 'Denis',
            img: ' src =https://www.easy-profile.com/support.html?controller=attachment&task=download&tmpl=component&id=2883'
        },
        {
            id: 5,
            name: 'Vanya',
            img: 'https://www.easy-profile.com/support.html?controller=attachment&task=download&tmpl=component&id=2883'
        },
    ],
    messages: [
        {
            id: 1,
            message: 'Hello',
            img: 'https://www.easy-profile.com/support.html?controller=attachment&task=download&tmpl=component&id=2883'
        },
        {
            id: 2,
            message: 'How are you?',
            img: 'https://www.easy-profile.com/support.html?controller=attachment&task=download&tmpl=component&id=2883'
        },
        {
            id: 3,
            message: 'What are you doing?',
            img: 'img src = https://www.easy-profile.com/support.html?controller=attachment&task=download&tmpl=component&id=2883'
        },
        {
            id: 4,
            message: 'Bye',
            img: 'img src = https://www.easy-profile.com/support.html?controller=attachment&task=download&tmpl=component&id=2883'
        },
    ],
    newMessageText: ''

}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.body
            };
        case ADD_MESSAGE:
            let body = action.newMessageText
            return {
                ...state,
                messages: [...state.messages, {id:6, message:body}],
                newMessageText: ''

        };
        default:
            return state;
        }
    }
export const  addMessageActionCreator = (newMessageText) => ({type: ADD_MESSAGE,newMessageText})
export const updateNewMessageTextActionCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, body: body})

export default  dialogsReducer;