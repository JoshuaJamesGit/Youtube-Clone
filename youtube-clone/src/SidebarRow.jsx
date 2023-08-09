import React from 'react'
import "./SidebarRow.css"





function SidebarRow({selected, title, icon}) {
  return (
    <div className= {`sidebarRow ${selected && 'selected'}`}>
      <p className="sidebarRow__icon" >{icon}</p>
      <h2 className='sidebarRow__title'>{title}</h2>
    </div>
  )
}

export default SidebarRow
