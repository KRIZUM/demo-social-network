import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'
const GET_LOGIN = 'GET_LOGIN'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            };
        case GET_LOGIN:
            return {
                ...state,
                ...action.data,
            };
        default:
            return state;
    }

}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
});
export const setAuthLogin = (email, password) => ({type: GET_LOGIN, data: {email, password}});


export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}
export const getAuthLogin = (email, password, rememberMe = false, actions) => async (dispatch) => {
    let response = await authAPI.getLogin(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Incorrect email or password '
        actions.setStatus(message)
    }
}
export const getAuthLogout = () => async (dispatch) => {
    let response = await authAPI.getLogout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}


export default authReducer;