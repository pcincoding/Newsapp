import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/" style={{color:'blue'}}>NewsParrot</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item"><NavLink to="/business" className="nav-link">Business</NavLink></li>
              <li className="nav-item"><NavLink to="/entertainment" className="nav-link">Entertainment</NavLink></li>
              <li className="nav-item"><NavLink to="/general" className="nav-link">General</NavLink></li>
              <li className="nav-item"><NavLink to="/health" className="nav-link">Health</NavLink></li>
              <li className="nav-item"><NavLink to="/science" className="nav-link">Science</NavLink></li>
              <li className="nav-item"><NavLink to="/sports" className="nav-link">Sports</NavLink></li>
              <li className="nav-item"><NavLink to="/technology" className="nav-link">Technology</NavLink></li>
            </ul>
            </div>
            </div>
            </nav>
    )
  }
}

export default Navbar