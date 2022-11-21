import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    ;
    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    return <div>
        <div className={styles.pages}>
            {slicedPages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}> {p} </span>
                }
            )}

        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </NavLink>
                        </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id=> id === u.id)} onClick={() => {
                            props.follow(u.id)
                        }} className={styles.button}>Follow </button>
                        : <button disabled={props.followingInProgress.some(id=> id === u.id)} onClick={() => {
                            props.unfollow(u.id)
                        }} className={styles.button}>Unfollow </button>}
                </div>
                </span>
                    <span>
                        <div className={styles.userName}>Name: {u.name}</div>
                        <div className={styles.userStatus}>Status: {u.status}</div>
                    </span>
                    <span>
                    <div className={styles.userLocation}>From: {"u.location.country"}, {'u.location.city'}</div>
                </span>

                </div>
            )

        }
    </div>

}

export default Users;
