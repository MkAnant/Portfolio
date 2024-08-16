import React, { useState } from 'react';
import Button from '../../Button/Button';
import "./Notify.css"

const Notify = () => {
    const [name, setName] = useState('');
    const [placeName, setPlaceName] = useState('Enter your name');
    const handleChange = (e) => {
        setName(e.target.value);
    };
    const scriptId = import.meta.env.VITE_GOOGLE_SCRIPT_ID;
    const handleClick = () => {
        fetch(`https://script.google.com/macros/s/${scriptId}/exec`, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name })
        })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
        setName('');
        setPlaceName("Sent! Thank you!");
        setTimeout(()=>setPlaceName("Enter your name"),1000);
    };

    return (
        <div className='notify contact-pic'>
            <label className='serif-font'>
                Add in your contact detail too.
            </label>
            <input
                    type="text"
                    value={name}
                    onChange={handleChange}
                    placeholder={placeName}
                />
            <Button type="dark-primary-button" OnChangedPage={handleClick} value={"Notify me that you dropped by"}/>
        </div>
    );
};

export default Notify;
