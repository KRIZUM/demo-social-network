import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow, getUser,
    setCurrentPage, toggleIsFollowingProgress,
    unfollow
} from "../../redux/users-reducer";
import Preloader from "../../common/Preloader/Preloader";
import {withAuthNavigate} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";




class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUser(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUser(pageNumber, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ?
                <Preloader/>: null}
        <Users totalUsersCount ={this.props.totalUsersCount}
                      pageSize ={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
               followingInProgress = {this.props.followingInProgress}
        />
        </>
    }
}

let mapStateToProps = (state) => {
    return{
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose(
    withAuthNavigate,
    connect(mapStateToProps, {
        follow , unfollow, setCurrentPage,
        toggleIsFollowingProgress, getUser})
)(UsersContainer)