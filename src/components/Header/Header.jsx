import React from 'react';
import s from'./Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return <header className={s.header}>
        <img src='https://mgprojectcsgo.ru/templates/default/img/g_logog.png'/>

        <div className={s.loginBlock}>
            {props.isAuth ?
                <div>{props.login} - <button onClick={props.getAuthLogout} >Log out</button></div>
               :<NavLink to={'/login'}> Login</NavLink> }
        </div>
    </header>

}

export default Header