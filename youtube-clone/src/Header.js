import React, {useState} from "react";
import { Menu, Search, VideoCall, Apps, Notifications } from '@mui/icons-material';
// import { Search } from '@mui/icons-material';
// import { VideoCall } from '@mui/icons-material';
// import { Apps } from '@mui/icons-material';
// import { Notifications } from '@mui/icons-material';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
    
  } from "react-router-dom";
  

import { Avatar } from '@mui/material';
import './Header.css';


function Header() {
    const [inputSearch, setInputSearch] = useState("");



    return (
        <div className="header">
            <div className="header__left">
                <Menu className="burgerMenu" />
                <Link to={`/`}>
                <img className="header__logo" src="https://lh3.googleusercontent.com/3g4wDOiAnxbyAflNz4MhGxrkWw4vJ_kEtHTKQyqTx3o9hMBLmTIJha9ZmY87yu9mc8uM-u2OYCz6gPLx4V1o-fuV0ZHGFGenWGKV8tnPR2OvOMqIe2c=v0-s1050" alt="Youtube logo" />
                </Link>

            </div>

            <div className="header__input">
                <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
                <Link to={`/search/${inputSearch}`}>
                <Search className="header__inputButton" />
                </Link>

            </div>

            <div className="header__icons">
                <VideoCall className="header__icon" />
                <Apps className="header__icon" />
                <Notifications className="header__icon" />
                <Avatar className="header__icon" alt="Joshua" src="https://avatars.githubusercontent.com/u/129615216?v=4" />


            </div>





        </div>
    );

}

export default Header;



