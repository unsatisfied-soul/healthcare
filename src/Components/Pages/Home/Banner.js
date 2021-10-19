import React from 'react';

const Banner = () => {
    return (
        <div className="banner w-10/12 flex mx-auto gap-7 pt-12">
            <div className="banner-left w-2/4 py-28">
                <h2 className="text-6xl">We Believe Everyone Should Have Easy Access To Great <span className="subbanner-text">WellnessProgram.</span></h2>
            </div>
            <div className="banner-right w-2/4 text-center pt-6">
                <img src="https://i.ibb.co/SKStTf9/doctor-PNG15972-1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;