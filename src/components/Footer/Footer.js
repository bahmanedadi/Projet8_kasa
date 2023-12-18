import React from 'react';
import logo from "../../assets/images/logo/logo_footer.png"

const Footer = () => {
    return (
      <footer className="footer">
        <img src={logo} alt="" className="footer_logo" />
        <p className="footer_text">
          © 2020 Kasa. All rights reserved
        </p>
      </footer>
    );
}

export default Footer;
