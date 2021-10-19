import React from 'react';
import FetchServices from '../../../FetchServices';

const Services = () => {
    return (
        <div className="services py-24">
            <h2 className="text-6xl text-center">Our Services</h2>
            <FetchServices></FetchServices>
        </div>
    );
};

export default Services;