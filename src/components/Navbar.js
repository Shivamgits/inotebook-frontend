import React from 'react'
import {Link, useNavigate } from 'react-router-dom';

 function Navbar() {
  let  navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('auth-token')
   navigate("/login")
  }

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">iNotebook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
      </ul>
      {
      !localStorage.getItem('auth-token')?<form className="d-flex">
      <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
      <Link className="btn btn-primary mx-1" to="/signUp"  role="button">SignUp</Link>
      </form>:<button onClick={handleLogout} className="btn btn-primary mx-1">Logout</button>}
     
    </div>
  </div>
</nav>
            
        </>
    )
}

export default Navbar
