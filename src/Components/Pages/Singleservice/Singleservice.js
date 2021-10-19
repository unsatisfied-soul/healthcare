import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Singleservice = () => {
    const {serviceId} = useParams();
    const [servicer,setServicer] = useState([])
    const [singleservice,setSingleservice] = useState({})
    useEffect(() => {
        const serviceData = `/Services.json`
        fetch(serviceData)
        .then(res => res.json())
        .then(data => setServicer(data))
    },[])
    useEffect(()=> {
        const foundService = servicer.find(service => service.id == serviceId)
        setSingleservice(foundService)
    },[servicer])

    return (
        <div className="w-7/12 mx-auto py-12">
            <img className="mb-10" src={singleservice?.img} alt="" />
            <h2 className="text-4xl font-bold mb-4">{singleservice?.title}</h2>
            <p>{singleservice?.desc}</p>
        </div>
    );
};

export default Singleservice;