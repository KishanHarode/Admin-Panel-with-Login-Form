import React from 'react';
import { NavLink } from 'react-router-dom';
import '../StylingDashBoard/Sidebar.css';
import Medicare from '../Assets/Kishan Harode_IT.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faHome, faPieChart, faReceipt, faSignIn, faUser } from '@fortawesome/free-solid-svg-icons';

export const SideBar = () => {
    return (
        <>
            <div className='sidebar p-2' >
                <div className='sidebar-header'>
                    <img src={Medicare} className='customImage' alt='customImage' />
                    <span style={{ fontSize: "20px", fontFamily: "Lato", fontWeight: "600px" }}
                    className='fontSidbar'>Welcome, Kishan Harode</span>
                </div>
                <ul className='sidebar-menu'>
                    <li>
                        <NavLink to="/dashboard" className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faHome} className="mr-2 span-1" />
                            <span className='sidebar-text'>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faChartBar} className="mr-2 span-2" />
                            <span className='sidebar-text'>About</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/users" className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faUser} className="mr-2 span-3" />
                            <span className='sidebar-text'>Users</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/report" className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faReceipt} className="mr-2 span-4" />
                            <span className='sidebar-text'>Form</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/overview" className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faPieChart} className="mr-2 span-5" />
                            <span className='sidebar-text'>Overview</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faSignIn} className="mr-2 span-6" />
                            <span className='sidebar-text'>Logout</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}







