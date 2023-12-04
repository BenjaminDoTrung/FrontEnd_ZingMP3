import React from 'react';
import {IoMdArrowBack} from "react-icons/io";
import {GoArrowLeft, GoArrowRight} from "react-icons/go";
import {CiSearch, CiSettings} from "react-icons/ci";
import {AiOutlineLogin} from "react-icons/ai";
import {FiSettings} from "react-icons/fi";
import {Link} from "react-router-dom";
import {HiArrowRight, HiOutlineArrowLeft} from "react-icons/hi";

const Nav = () => {
    return (
        <>

                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginLeft:250}}>
                        <div className="container-fluid" style={{backgroundColor: ""}}>

                                <a style={{marginLeft:50}} className="navbar-brand" href="#"><HiOutlineArrowLeft /></a>
                                <a className="navbar-brand" style={{marginLeft:0}}><HiArrowRight /></a>
                                <div style={{width:370,borderRadius:20}}>
                                    <CiSearch style={{width: 25, height: 25}} />
                                    <input style={{width: 330, borderRadius: 20, float:"right"}} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>

                                </div>

                            <button style={{borderRadius: 20,float:"right", backgroundColor:"white"}} type="submit">Tải bản windows</button>
                            <button style={{borderRadius: 20,float:"right",backgroundColor:"white"}} type="submit"><FiSettings /></button>
                                <button style={{borderRadius: 20,float:"right",backgroundColor:"white"}}type="submit"><AiOutlineLogin /></button>
                        </div>
                    </nav>
                </div>

        </>
    );
};

export default Nav;