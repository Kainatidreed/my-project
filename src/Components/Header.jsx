import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div>
        <Link to="/">
            <button>All</button>
        </Link>
        <Link to="/aboutus">
            <button>Aboutus</button>
        </Link>
      
    </div>
  )
}

export default Header
