import React, { Component } from 'react';
import { Link }             from 'react-router-dom';


class HeaderMenu extends Component {
    render() {
        return (
            <div className='wrap-header-menu'>
                <ul className='header-menu'>
                    <li><Link to='/'>Главная</Link></li>
                    <li><Link to='/addnewartist'>Добавить трек</Link></li>
                    <li><Link to='#'>Редактировать трэк</Link></li>
                    <li><a href="">Выступления</a></li>
                    <li><a href="">Контакты</a></li>
                </ul>
            </div>
        );
    }
}

export default HeaderMenu;
