import React from 'react';
import "./SearchPage.css"
import Sidebar from './Sidebar';
import { Tune } from  "@mui/icons-material";

function Searchpage() {
  return (
    <div className='searchPage'>
      <div className="searchPage__filter">
        <Tune/>

      </div>
    </div>
  )
}

export default Searchpage