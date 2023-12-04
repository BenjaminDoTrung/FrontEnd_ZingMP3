import React, {useState} from 'react';
import * as path from "path";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import icons from "../ultil/icon";

const Search = () => {
    const navigate = useNavigate()

    const {AiOutlineSearch} = icons



    return (
        <div className='search_zone'>
    <span className='icon_search'>
        <AiOutlineSearch size={27}/>
    </span>
            <input
                type="text"
                className='ipt_search'
                placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
                onKeyUp={handleSearch}
            />
        </div>
    );
};

export default Search;