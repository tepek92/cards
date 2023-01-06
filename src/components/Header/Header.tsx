import React from 'react';
import {Link} from 'react-router-dom';
import {PATH} from '../../common/constans/path';
import s from './Header.module.css'

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.link_box}><Link to={PATH.DEMO_STAND}>demo stand</Link></div>
            <div className={s.link_box}><Link to={PATH.PROFILE}>profile</Link></div>
            <div className={s.link_box}><Link to={PATH.LOGIN}>login</Link></div>
            <div className={s.link_box}><Link to={PATH.REGISTRATION}>registration</Link></div>
            <div className={s.link_box}><Link to={PATH.RESET_PASSWORD}>reset password</Link></div>
            <div className={s.link_box}><Link to={PATH.CREATE_NEW_PASSWORD}>new password</Link></div>
            <div className={s.link_box}><Link to={PATH.ERROR_404}>error 404</Link></div>
        </div>
    );
};

