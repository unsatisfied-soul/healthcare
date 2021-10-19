import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer py-10 pt-24">
            <div className="top-footer w-10/12 mx-auto gap-8">
                <div className="footer-one">
                    <h2 className="text-3xl mb-3">Wellness<span className="sub">Program</span></h2>
                    <p className="text-white font-medium">Caregivers may be more aggressive in seeking medical help when their relatives are in the early stage of dementia biasing recruited populations to earlier more mild disease.</p>
                </div>
                <div className="footer-two px-10">
                    <h3 className="text-2xl pt-2">Menu</h3>
                    <ul className="">
                        <li><Link className="text-white text-xl border-b" to="/home">Home</Link></li>
                        <li>
                        <Link className="text-white text-xl border-b" to="/about">About</Link>
                        </li>
                        <li>
                        <Link className="text-white text-xl border-b" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-three pt-2">
                    <h3 className="text-2xl">Social</h3>
                    <ul className="footer-menu pt-5">
                        <li>
                            <FontAwesomeIcon className="text-4xl text-white" icon={faFacebook}></FontAwesomeIcon>
                        </li>
                        <li className="icon-dot">
                        <FontAwesomeIcon className="text-4xl text-white" icon={faTwitter}></FontAwesomeIcon>
                        </li>
                        <li className="icon-dot">
                        <FontAwesomeIcon className="text-4xl text-white" icon={faLinkedin}></FontAwesomeIcon>
                        </li>
                    </ul>
                </div>
                <div className="footer-four pt-4">
                    <h3 className="text-2xl">Subscribe</h3>
                    <input className="py-2 px-2 mb-2" type="text" />
                    <button className="logbtn px-5 py-2">Submit</button>
                </div>
            </div>
            <div className="footer-bottom pt-8">
                <p className="text-white text-center text-xl">wellprogram © 2021. All rights reserved. </p>
            </div>
        </div>
    );
};

export default Footer;