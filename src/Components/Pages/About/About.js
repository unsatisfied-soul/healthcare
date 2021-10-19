import React from 'react';
import Certifiedfetch from '../Home/Certifiedfetch';
import './About.css'

const About = () => {
    return (
        <div className="aboutus py-24">
            <div className="aboutus-top w-5/6 mx-auto flex gap-5">
                <div className="top-img w-2/4">
                    <img src="https://i.ibb.co/KXj3Dxt/pexels-rodnae-productions-6129507.jpg" alt="" />
                </div>
                <div className="top-desc w-2/4 px-4 py-4">
                    <h2 className="text-4xl font-semibold mb-3">Who we are ?</h2>
                    <p className="text-gray-500">A physician, medical practitioner, medical doctor, or simply doctor, is a professional who practices medicine, which is concerned with promoting, maintaining or restoring health through the study, diagnosis, prognosis and treatment of disease, injury, and other physical and mental impairments. Physicians may focus their practice on certain disease categories, types of patients, and methods of treatment—known as specialities—or they may assume responsibility for the provision of continuing and comprehensive medical care to individuals, families, and communities—known as general practice Medical practice properly requires both a detailed knowledge of the academic disciplines, such as anatomy and physiology,  </p>
                </div>
            </div>
            <div className="aboutus-bottom flex gap-5 w-5/6 mx-auto py-24">
               
                <div className="top-desc w-2/4 px-4 py-4">
                    <h2 className="text-4xl font-semibold mb-3">How we take care our patient?</h2>
                    <p className="text-gray-500">THERE IS A SIGNIFICANT difference between taking care of patients and caring for patients. TAKING CARE OF PATIENTS emphasizes objective, professional care, such as the medical and psychological aspects of nursing. CARING FOR PATIENTS, on the other hand, is a humanistic way of interacting with patients that demonstrates sincere care and concern for patients simply because they are human beings.My mother is a wise woman, and yet growing up I often ignored her advice because, after all, what could she possibly know that I, as a worldly 18-year-old, didn't already know? Spoiler alert: A lot.  </p>
                </div>
                <div className="top-img w-2/4">
                    <img src="https://i.ibb.co/XzPZJgv/pexels-evelina-zhu-5434018.jpg" alt="" />
                </div>
            </div>

            <Certifiedfetch></Certifiedfetch>
            
        </div>
    );
};

export default About;