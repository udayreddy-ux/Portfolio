import Footer from './Footer';
import React from 'react';
export default function Contact(){
    return(
        <>
        <div className='contact-form'>
            <h1 className='head'>Let's Talk</h1>
            <form>
                <div className='form-group'>
                    <div className='form-field'>
                        <label>Name</label>
                        <input type='text' placeholder='Your name' required/>
                    </div>
                </div>
                <div className='form-group'>
                    <div className='form-field'>
                        <label>Email</label>
                        <input type='email' placeholder='Your email' required/>
                    </div>
                </div>
                <div className='form-group'>
                    <div className='form-field'>
                        <label>Subject</label>
                        <input type="text" placeholder='Your subject' required/>
                    </div>
                </div>
                <div className='form-group'>
                    <div className='form-field'>
                        <label>Message</label>
                        <textarea placeholder='Write your message' required/>
                    </div>
                </div>
                <br/>
                <button type="submit">Send Message</button>
            </form>
        </div>
        <Footer/>
        </>
    );
}