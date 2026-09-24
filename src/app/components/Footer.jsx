import React from 'react';
import Logo from './Logo';

const Footer = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex'>
                <Logo></Logo>
                <h2 className='trxt-4'>FITLOG</h2>
            </div>

            <div><p className='text-gray-500 text-xs'>© 2026 FitLog — Workout Library. Train hard, log honest.</p></div>
        </div>
    );
};

export default Footer;