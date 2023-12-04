import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import logo from '../assets/img/logo.svg';
import { sidebarMenu } from '../ultil/menu';

const SidebarLeft = () => {
    let navigate = useNavigate();
    return (
        <div className='left'>
            <div onClick={()=> navigate('/')} className='logo'>
                <img src={logo} alt="Logo" className='img_logo'/>
            </div>
            <div className='nav_menu'>

                {
                    sidebarMenu.map(item =>(
                        <NavLink
                            to={item.path}
                            className={'nav_menu_items'}
                            key={item.path}
                        >
                            {item.icons}
                            <span style={{fontWeight: 'bold',fontSize: '14px'} }>{item.text}</span>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default SidebarLeft;