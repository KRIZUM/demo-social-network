import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi"
import * as BiIcons from "react-icons/bi"


const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.items}>
            <NavLink to={"/profile"}
                     className={navData => navData.isActive ? s.active : s.item}><AiIcons.AiFillHome/> Profile </NavLink>
        </div>
        <div className={`${s.items} `}>
            <NavLink to={"/dialogs"}
                     className={navData => navData.isActive ?  s.active : s.item}><IoIcons.IoIosPaper/> Messages
            </NavLink>
        </div>
        <div className={`${s.items} `}>
            <NavLink to={"/users"} className={navData => navData.isActive ?  s.active : s.item}><FiIcons.FiUsers/> Users</NavLink>
        </div>
        <div className={`${s.items} `}>
            <NavLink to={"/news"}
                     className={navData => navData.isActive ?  s.active : s.item}><BiIcons.BiNews/> News</NavLink>
        </div>
        <div className={`${s.items} `}>
            <NavLink to={"/music"} className={navData => navData.isActive ?  s.active : s.item}><FiIcons.FiMusic/> Music</NavLink>
        </div>
        <div className={`${s.items}`}>
            <NavLink to={"/settings"}
                     className={navData => navData.isActive ?  s.active : s.item}><FiIcons.FiSettings/> Settings</NavLink>
        </div>

    </nav>

}

export default Navbar;