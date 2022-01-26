import React from 'react';

export default function Navbar() {
  return <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark-extra">
        <div className="container">
            <a href="#">
            <img className="logo" src="images/logo/logo.png" alt />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                </li>

                <li className="nav-item">
                <a className="nav-link active" href="#">About us</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" href="#">Service</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" href="#">Portfolio</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" href="#">Pricing</a>
                </li>
                
                <li className="nav-item">
                <a className="nav-link active" href="#">Reviews</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" href="#">Contact</a>
                </li>
                <li>
                    
                </li>
            </ul>
            </div>
        </div>
        </nav>

  </div>;
}
