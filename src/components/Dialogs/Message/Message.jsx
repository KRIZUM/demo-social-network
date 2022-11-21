import React from 'react';
import s from './../Dialogs.module.css';


const Message = (props) => {
    return (
    <div className={s.dialogs}>
        <img src = 'https://www.easy-profile.com/support.html?controller=attachment&task=download&tmpl=component&id=2883'/>
        {props.message}
    </div>
    )
}
export default Message;