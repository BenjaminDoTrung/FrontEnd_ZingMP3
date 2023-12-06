import {useNavigate} from "react-router-dom";
import icons from "./icon";
import {useState} from "react";

const Search = () => {
    const navigate = useNavigate()
    const {AiOutlineSearch} = icons
    const [keyword, setKeyword] = useState('')



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
                // onKeyUp={} :nơi chuyền Hàm nhận API
            />
        </div>
    )
}

export default Search