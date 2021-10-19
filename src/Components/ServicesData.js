import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const ServicesData = (props) => {
    const {id,icon,title,desc} = props.service;
    // console.log([...desc].slice(0,200).join(""))
    let doted = ['...']
    let shortdesc = [...desc].slice(0,210);
    let shorted = shortdesc.concat(doted).join('');
    
    return (
        <div className="service-desc p-5 border pb-12">
            <img src={icon} className="w-24 mx-auto mb-8" alt="" />
            <h3 className="text-2xl mb-2 font-bold service-title">{title}</h3>
            <p className="font-medium text-gray-500 mb-8">{shorted}</p>
            <Link className="px-4 border py-3 service-btn" to={`/service/${id}`}>
                <button className="text-white font-semibold">Learn more <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
            </Link>
        </div>
    );
};

export default ServicesData;