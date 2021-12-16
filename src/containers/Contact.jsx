import * as React  from 'react';
import wave        from '@images/wave.svg';
import FormContact from '@components/FormContact';
import '@styles/contact.scss';

const Contact = () => {
    return (
        <section className="contact">
            <img src={ wave } alt="wave shape" />
            <h6 className="contact__title">Now is time to meet us and make all your work have your brand</h6>
            <p className="contact__text">I just need a few details, it will take <strong>less than a minute</strong></p>
            <FormContact/>
        </section>
    )
}

export default Contact
