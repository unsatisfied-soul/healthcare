import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import useAuth from '../hooks/useAuth';


const Header = () => {
    const {user,logout} = useAuth();
    return (
        <div className="header">
            <div className="top-header w-11/12 mx-auto py-10 flex justify-between mb-4">
                <div className="logo">
                    <h2 className="text-5xl heading">Wellness<span className="heading-sub">Program</span></h2>
                </div>
                <div className="contact-details flex justify-around mt-5">
                    <div className="contact-detail">
                        <ul className="detail-ul">
                            <li><FontAwesomeIcon className="text-xl" icon={faPhoneAlt} /> <span className="text-lg ml-1 font-bold">+9034535573</span> </li>
                            <li><FontAwesomeIcon className="text-xl" icon={faEnvelope}></FontAwesomeIcon> <span className="text-lg ml-1 font-bold">www.xyz.com</span> </li>
                        </ul>
                    </div>
                    <div className="log-info mr-4">
                             
                            {
                                user.email ?
                                <div className="flex">
                                    <button onClick= {logout} className="text-lg font-bold px-7 py-3 logbtn">Logout</button>
                                    <p className="p-4 font-bold">{user.displayName}</p>
                                </div>
                                
                                
                                :
                                <Link className="px-7 py-3 logbtn" to="/login">
                                <button className="text-lg font-bold">LogIn</button>
                                </Link>
                            }
                                 
                    </div>
                </div>
            </div>
            <div className="sub-header flex">
                <div className="space w-1/3"></div>
                <div className="top-menu w-full py-5">
                    <ul>
                        <li>
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/home">Services</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/home">Doctors</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/home">Blog</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/home">Contact US</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;