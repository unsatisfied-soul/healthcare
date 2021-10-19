import React, { useEffect, useState } from 'react';
import ServicesData from './Components/ServicesData';
import './Components/Pages/Home/Home.css'

const FetchServices = () => {
    const [services, setServices]=useState([])
    useEffect(()=> {
        fetch('/Services.json')
        .then(res=> res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="service-detail mt-16 py-4 w-4/5 mx-auto gap-10">
          {
              services.map(service => <ServicesData
                key= {service.id}
                service = {service}
              ></ServicesData>)
          }  
        </div>
    );
};

export default FetchServices;