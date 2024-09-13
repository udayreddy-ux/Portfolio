import React, { useState } from 'react';
import Footer from './Footer';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://udaytech.net/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });            
            if (response.ok) {
                // Use alert to show the pop-up message
                alert('🙏Message sent successfully!!🙏');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <>
            <div className='contact-form'>
                <h1 className='head'>Let's Talk</h1>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <div className='form-field'>
                            <label>Name</label>
                            <input
                                type='text'
                                name='name'
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder='Your name'
                                required
                            />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='form-field'>
                            <label>Email</label>
                            <input
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder='Your email'
                                required
                            />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='form-field'>
                            <label>Subject</label>
                            <input
                                type='text'
                                name='subject'
                                value={formData.subject}
                                onChange={handleInputChange}
                                placeholder='Your subject'
                                required
                            />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='form-field'>
                            <label>Message</label>
                            <textarea
                                name='message'
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder='Write your message'
                                required
                            />
                        </div>
                    </div>
                    <br />
                    <button type="submit">Send Message</button>
                </form>
            </div>
            <Footer />
        </>
    );
}
