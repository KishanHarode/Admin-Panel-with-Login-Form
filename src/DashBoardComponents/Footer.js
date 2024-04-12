import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../StylingDashBoard/Footer.css';
import { faStethoscope, faPrescriptionBottleAlt, faFileMedical, faUserMd } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const cardsData = [
        {
            title: 'Stethoscope',
            description: 'A device that allows two separate images to be viewed as a single 3D image, creating a sense of depth perception.',
            icon: faStethoscope
        },
        {
            title: 'PrescriptionBottle',
            description: 'It is a container typically made of plastic or glass, used to stroe and dispense medications.',
            icon: faPrescriptionBottleAlt
        },
        {
            title: 'FileMedical',
            description: "It is a collection of documnets containing a patient's medical history to patients in healthcare facility.",
            icon: faFileMedical
        },
        {
            title: 'UserMd',
            description: 'It could potentially refer to a user interface ot platform designed for medical professional.',
            icon: faUserMd
        }
    ];

    return (
        <div className='container-fluid FooterContainer'>
        <div className='row footerContainer-row'>
            {cardsData.map((card, index) => (
                <div key={index} className='card FooterCard'>
                    <FontAwesomeIcon icon={card.icon} size='2x' className='iconsStyle' />
                    <div className='card-body footer-card-body'>
                        <p className='card-title footer-card-title1'>{card.title}</p>
                        <p className='card-title footer-card-title2'>{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}

export default Footer;
