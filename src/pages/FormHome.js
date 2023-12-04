import React from 'react';
import SidebarLeft from "./SidebarLeft";

const FormHome = () => {
    return (
        <div className="wapper">
            <div className="content">
                <div className="side_left">
                    <SidebarLeft/>
                </div>

                {isshow ? <div className="contents">
                    <div className="header">
                        <Header/>
                    </div>
                    <Outlet/>
                </div> : <div className="contents_hiden">
                    <div className="header_hiden">
                        <Header/>
                    </div>
                    <Outlet/>
                </div>}

                {isshow ?
                    <div className="side_right">
                        <SidebarRight/>
                    </div> : <div className="sideRight_hidden">
                        <SidebarRight/>
                    </div>}
            </div>

            <div className="playmusic">
                <Player setIsShow={setIsShow}/>
            </div>
        </div>
    );
};

export default FormHome;