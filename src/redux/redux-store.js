import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";
import appReducer from "./app-reducer";

let reducer = combineReducers({
    messagesPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
});


let store = legacy_createStore(reducer, applyMiddleware(thunkMiddleWare));

window.store = store;
export default store;