import React from 'react'
import { Link } from 'react-router-dom'


//import Proptypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
  
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page"to="/">Home</Link>
          </li>
        
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        
            <div className={`form-check form-switch text-${props.mode==='light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" checked={props.mode==='light'?false:true} onChange={()=>{}} id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
    </div>
      </div>
    </div>
  </nav>
  )
} 

// Navbar.proptypes ={

//     title: Proptypes.string,
//     aboutText:Proptypes.string 
// }

// Navbar.defaultprops = {
//     title: 'set title here',
//     aboutText: 'about text here'
// }