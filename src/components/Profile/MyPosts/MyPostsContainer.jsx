import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthNavigate} from "../../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return{
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost : (newPostText) => {
            dispatch (addPostActionCreator(newPostText))
        }
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthNavigate
)(MyPosts)