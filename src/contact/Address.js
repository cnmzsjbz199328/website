import React from 'react';
import './Address.css';

function Address() {
    return (
        <div className="address-container">
            <div className="map-container">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1632.2530213333084!2d138.5408040183159!3d-35.09407282042994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0d815508b876f%3A0xb83344fe88e1dd72!2sReynella%20Neighbourhood%20Centre!5e0!3m2!1sen!2sau!4v1728103797859!5m2!1sen!2sau" 
                    className="map-iframe"
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className="address-details">
                <h2>Connect with us</h2>
                <p><strong>Physical Address:</strong></p>
                <p>164-170 Old South Road, Old Reynella 5161</p>
                <p><strong>Office hours:</strong></p>
                <p>Monday – Thursday 9am - 4pm</p>
                <p><strong>E-Mail:</strong></p>
                <p>info@reynellanc.org.au</p>
                <p><strong>Phone:</strong></p>
                <p>08 8322 3591</p>
                <p><strong>ABN:</strong></p>
                <p>22 459 039 614</p>
            </div>
        </div>
    );
}

export default Address;