import React, { useEffect, useState } from 'react';
import CertifiedDoctor from './CertifiedDoctor';
import './Home.css'

const Certifiedfetch = () => {
    const [doctors,setDoctors]=useState([])
    useEffect(() => {
        fetch('/Doctor.json')
        .then(res => res.json())
        .then(data=> setDoctors(data))
    },[])
    return (
        <div className="doctors-details">
        <h2 className="text-5xl text-center">Our Certified Doctor</h2>
        <div className=" w-10/12 mx-auto flex gap-10">
            
            {
                doctors.map(doctor=> <CertifiedDoctor
                    key= {doctor.key}
                    doctor = {doctor}
                ></CertifiedDoctor>)
            }
        </div>
        </div>
        
    );
};

export default Certifiedfetch;