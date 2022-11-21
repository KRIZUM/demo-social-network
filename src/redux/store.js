import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import usersReducer from "./users-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT='UPDATE-NEW-MESSAGE-TEXT';
let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', like: '🧡 15'},
                {id: 2, message: "It's my first post ^_^", like: '🧡 12'},
            ],
            newPostText: 'shorohov'
        },
        usersPage: {
            users: [
                {
                    id: 1,
                    followed: true,
                    fullName: 'Vladislav S.',
                    status: 'Hi',
                    location: {city: 'Kursk', country: 'Russia'}
                },
                {
                    id: 2,
                    followed: false,
                    fullName: 'Denis V.',
                    status: 'Peace',
                    location: {city: 'Kursk', country: 'Russia'}
                },
                {
                    id: 3,
                    followed: true,
                    fullName: 'Sasha A.',
                    status: 'Whats up',
                    location: {city: 'Kursk', country: 'Russia'}
                },
                {
                    id: 4,
                    followed: true,
                    fullName: 'Stanislav S.',
                    status: 'Working',
                    location: {city: 'Kursk', country: 'Russia'}
                },
            ],
        },
        messagesPage: {
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
            newMessageText: 'Hello'
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Sasha',
                    img: 'src = \'https://www.easy-profile.com/support.html?controller=attachment&task=download&tmpl=component&id=2883'
                },
                {
                    id: 2,
                    name: 'Stas',
                    img: 'src = \'https://www.easy-profile.com/support.html?controller=attachment&task=download&tmpl=component&id=2883'
                },
                {
                    id: 3,
                    name: 'Denis',
                    img: 'src = \'https://www.easy-profile.com/support.html?controller=attachment&task=download&tmpl=component&id=2883'
                },
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._state.usersPage= usersReducer(this._state.usersPage, action)
        this._callSubscriber(this._state);
        }
    }
export const  addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const  addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (message) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: message})

export default store;
window.store = store;
