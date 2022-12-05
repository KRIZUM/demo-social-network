import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
    <div>
        <div className ={s.avaBlock}>
            <img src={props.profile.photos.large}/>
            <div> {props.profile.fullName}</div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>
    )
}


export default ProfileInfo