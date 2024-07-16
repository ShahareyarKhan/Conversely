import React from 'react'
import { MdDarkMode } from 'react-icons/md'

const Header = (props) => {
  return (
    <nav>

      <div className='logo'>Conversely</div>
      <div>
        <MdDarkMode onClick={props.handledarkmode}/>
      </div>
    </nav>
  )
}

export default Header
