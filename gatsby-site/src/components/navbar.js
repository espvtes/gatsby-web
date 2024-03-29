import React from 'react';
import { Link } from 'gatsby';
import Logo from '../images/breathecoLogo.png'
import navbarStyles from '../styles/components.module.css';


const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg">
            {/* <a className="navbar-brand" href="#">LOGO</a> */}
            <Link to="/" className=""><img src={Logo} className="navbar-brand" width="50" height="60"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <Link to="/learnToCode" className="nav-link font-weight-bolder text-muted"><label className={navbarStyles.link}>Learn To Code</label></Link>
                </li>
                <li className="nav-item ml-4">
                    <Link to="/aboutUs" className="nav-link font-weight-bolder text-muted"><label className={navbarStyles.link}>About Us</label></Link>
                </li>
                <li className="nav-item ml-4">
                    <Link to="/openSourceProject" className="nav-link font-weight-bolder text-muted" ><label className={navbarStyles.link}>Open Source Project</label></Link>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-primary my-2 my-sm-0 " type="button"><label className={navbarStyles.btnLogin}>Login</label></button>
                </form>
            </div>
        </nav>
    )
};

export default Navbar;