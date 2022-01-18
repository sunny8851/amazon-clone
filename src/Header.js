import React from 'react'
import { Link} from 'react-router-dom'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
function Header() {
    return (
        <nav className='header'>
           <Link to="/">
            <img className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
        
        </Link>

       < input type="text" className=" header__searchinput"/>
       <SearchIcon className='header__searchicon'/>
        </nav>
    )
}

export default Header
