import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact pt-24">
            <div className="contact-detail py-12 mb-8">
                <h2 className="text-center text-5xl font-bold">Contact us / Appointment</h2>
            <div className="form-site flex px-16 py-10">
            <div className="input-field w-2/4 py-12">
                <form className=" block mx-auto">
                <textarea className="border border-black p-2 mb-2" rows="6" cols="60" name="comment" form="usrform">
                    write your problem...</textarea>
                    <br />
                    <input className="border border-black px-2 py-2 w-56" type="text" placeholder="name"/>
                    <input className="border ml-2 border-black px-2 py-2 w-56" type="number" placeholder="phone"/>
                    <br />
                    <input className="border border-black px-2 py-2 w-56 mt-2" type="email"  placeholder="email"/>
                    <br />
                 <input className="mt-2 px-12 py-3 contact-btn font-bold text-white" type="submit" value="Appointment" />
            </form>
            </div>
            <div className="input-image w-2/4">
                <img className="w-11/12" src='https://i.ibb.co/19nMY9H/Online-doctor-consultation-diagnostics-advice-or-support-of-patient-over-the-internet-video-call-on.jpg' alt="" />
            </div>
            </div>
            </div>

            <div className="map-image">
                <img className="h-screen w-full" src="https://i.ibb.co/K95r3V5/map-3120436-1920.jpg" alt="" />
            </div>
        </div>
    );
};

export default Contact;