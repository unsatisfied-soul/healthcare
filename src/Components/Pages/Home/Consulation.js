import { faViadeo } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Consulation = () => {
    return (
        <div className="consulation mb-24 mt-24">
            <div className="consulationoverlay">
                <div className="conicon pt-24 w-3/4 mx-auto text-center">
                    <FontAwesomeIcon className="text-center text-8xl text-white mb-4" icon={faViadeo}></FontAwesomeIcon>
                    <h2 className="text-4xl font-bold text-white mb-3">Free Consultation For You!</h2>
                    <h4 className="text-xl text-gray-200 mb-6">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h4>
                    <Link className="btn-load px-4 py-3" to="contact">
                        <button className="font-bold text-white text-xl">Contact us<FontAwesomeIcon className="ml-2 pt-1" icon={faArrowRight}></FontAwesomeIcon></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Consulation;