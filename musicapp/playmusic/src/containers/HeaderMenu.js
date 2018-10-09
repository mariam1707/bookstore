import React,{Component} from 'react';
import {Link} from 'react-router-dom';


class HeaderMenu extends Component {
    render(){
        return(
            <div className='wrap-header-menu'>
                <ul>
                    <li><Link to='/'>Главная</Link></li>
                    <li><a href="">Музыка</a></li>
                    <li><a href="">Видео</a></li>
                    <li><a href="">Выступления</a></li>
                    <li><a href="">Контакты</a></li>                    
                </ul>
            </div>
        )
    }
} 

export default HeaderMenu;