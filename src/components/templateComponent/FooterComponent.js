import React from "react";

const FooterComponent = (props) => {
  const {} = props;

  return (
    <div className="footer">
      <div className="first-line">
        <div className="container">
          <div className="menu-area">
            <ul>
              <li>Games</li>
              <li>Membership</li>
              <li>Download</li>
            </ul>
            <ul>
              <li>Contact Us</li>
              <li>Blog</li>
            </ul>
            <ul>
              <li>FAQs</li>
              <li>Service Status</li>
            </ul>
          </div>
          <div className="social-media-area">
            <h1>Follow Us!</h1>
            <ul>
              <li><i className="social-media facebook"></i></li>
              <li><i className="social-media twitter"></i></li>
              <li><i className="social-media instagram"></i></li>
              <li><i className="social-media youtube"></i></li>
            </ul>
          </div>
          <div className="laguage-area">
            <h1>Site Language</h1>
            <select name="" id="">
              <option value="English">English</option>
              <option value="English">English</option>
            </select>
          </div>
        </div>
      </div>
      <div className="second-line">
        <div className="container">
          <ul>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
          </ul>
          <p>Tüm hakları saklıdır.</p>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
