import React from 'react';
import '../StylingDashBoard/Header.css';
import Avtar from '../Assets/Kishan Harode_IT.jpg';
import Medicare from '../Assets/medical-care.webp';
const Header = () => {
    return (
        <>
            <header className="headerStyle bg-success">
                <div className="logo">
                    <img src={Medicare} alt='medicare' className='customLogoMedicare'/>
                    <span className='headerLogo' style={{ marginLeft: "5px",textShadow:"4px 4px 2px rgba(0,0,0,0.4)"}}>Medicare Dashboard</span>
                </div>
                <div className="user-profile">
                    <span className="userStyle">Welcome, Kishan Harode</span>
                    <img src={Avtar} alt="User Avatar" className="avatarStyle" />
                </div>
            </header>
        </>
    );
}

export default Header;
