import React from 'react';
import './Home.css'

const CertifiedDoctor = (props) => {
    const {img,title,special} = props.doctor
    return (
        <div className="doctor-detail mt-24 py-8">
            <img src={img} alt="" />
            <div className="certified-detail py-6 text-center">
                <h3 className="text-2xl text-white font-bold mb-2">{title}</h3>
                <h4 className="text-current font-semibold">{special}</h4>
            </div>
            
        </div>
    );
};

export default CertifiedDoctor;