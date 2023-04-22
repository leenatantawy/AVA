import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../services/firebase';
import './styles.css'

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-uchicago">
        <Link className="navbar-brand" to="/">AVA</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link mr-3 bg-white" to="/login">Sign In</Link>
              <Link className="nav-item nav-link mr-3 bg-white" to="/signup">Sign Up</Link>
            </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

