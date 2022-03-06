import React from 'react';

const HeaderComponent = (props) => {

    return (
        <div className="header">
            <div className="container">
                <div className="logo">
                </div>
                <div className="header-right">
                    <i className="menu-icon"></i>
                    <ul className="header-menu">
                        <li className="active"><a href="Games">Games</a></li>
                        <li><a href="Membership">Membership</a></li>
                        <li><a href="Download">Download</a></li>
                        <li><a href="Blog">Blog </a></li>
                        <li><a href="Support">Support</a></li>
                    </ul>
                    <a href="#" className="lest-play">LET'S PLAY</a>
                </div>
            </div>
        </div>
    );
};

export default HeaderComponent;
