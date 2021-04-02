import React from 'react';

const Location =()=> {
    return (
        <div className="location_wrapper">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12111.998136467302!2d-74.0213759910379!3d40.62989224343499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c245515631e381%3A0x86b74da3bfb6c8fa!2sHigh%20School-Telecommunications!5e0!3m2!1sen!2sus!4v1614315266997!5m2!1sen!2sus" 
        width="100%" height="500px"  allowFullscreen="" loading="lazy"></iframe>
        <div className="location_tag">
        <div>Location</div>
        
        </div>
            
        </div>
    );
};

export default Location;