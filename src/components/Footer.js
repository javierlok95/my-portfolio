import React from 'react';
import './footer.css';
import Logo from '../images/logo.png';

const Footer = () => {
  return (
    <div className="footer-bottom">
      <div className="container-foot">
        <div className="row">
          <div className="col-xs-12 text-center-footer">
            {/* <!--Footer Bottom--> */}
            <p>&copy; 2023 - J.L.CH. All rights reserved.</p>
            <a className="navbar-brand" href="/">
              <img src={Logo} alt="Logo" width="95" height="16" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;