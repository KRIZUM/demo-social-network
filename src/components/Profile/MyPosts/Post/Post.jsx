import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src = 'https://www.easy-profile.com/support.html?controller=attachment&task=download&tmpl=component&id=2883'/>
            {props.message} {props.Like}
            </div>
    )
}

export default Post