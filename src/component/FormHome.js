import React from 'react';
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import SidebarLeft from "./SidebarLeft";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import Search from "./Search";
import Login from "./Login";

function FormHome() {
    const navi = useNavigate();
    // const LoginService = () => {
    //     return new Promise(resolve => {
    //         resolve(<Login></Login>)
    //     });
    // };
    return (
        <div className="wapper">
            <div className="content">
                <div className="side_left">
                   <SidebarLeft></SidebarLeft>
                </div>
                <div className="contents">
                    <div className="header">
                        <div className='header_left'>
                            <div className='control'>
                                <span onClick={() => navi(-1)}><FaArrowLeft size={24}/></span>
                                <span onClick={() => navi(-1)}><FaArrowRight size={24}/></span>
                            </div>
                            <div className='search'>
                                <Search />
                            </div>
                        </div>
                        <div className='header_right'>
                            <button onClick={next}>Login</button>
                        </div>
                    </div>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
    function next(){
        navi("/Login")
    }
}
export default FormHome;