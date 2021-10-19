import React from 'react';
import Banner from './Banner';
import Certifiedfetch from './Certifiedfetch';
import Consulation from './Consulation';
import './Home.css'
import Services from './Services';

const Home = () => {
    return (
        <div className="main-containe">
            <Banner></Banner>
            <Services></Services>
            <Certifiedfetch></Certifiedfetch>
            <Consulation></Consulation>
        </div>
    );
};

export default Home;