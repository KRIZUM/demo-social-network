import React from 'react';
import Profile from "./Profile";
import {getStatus, getUserProfile, savePhoto, updateStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import { useParams} from "react-router-dom";
import {withAuthNavigate} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export function withRouter(Children){
    return(props)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}
    class ProfileContainer extends React.Component{

    refreshProfile () {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile();
        }
    }

        render () {

    return (
        <Profile{...this.props}
                profile = {this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                isOwner={!this.props.match.params.userId}
                savePhoto={this.props.savePhoto}/>
    )
}
}

let mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId

}
)

export default compose(
    connect (mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    withAuthNavigate
)(ProfileContainer)
