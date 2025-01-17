import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
   <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Auth App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to={'/Home'}>Home</Link>
        <Link className="nav-link" to={'/Register'}>Register</Link>
        <Link className="nav-link" to={'/Login'}>Login</Link>
      </div>
    </div>
  </div>
</nav>

  )
}
