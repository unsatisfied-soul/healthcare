import React from 'react';
import Banner from './Banner';
import './Home.css'
import Services from './Services';

const Home = () => {
    return (
        <div className="main-container">
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;