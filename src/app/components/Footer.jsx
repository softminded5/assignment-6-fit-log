import React from 'react';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="mt-auto border-t border-base-300 bg-base-500">
            <div className="mx-auto flex max-w-7xl  items-center justify-between gap-4 px-4 py-6 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3">
                    <Logo />
                    <span className="text-lg font-bold tracking-tight text-base-content"> FITLOG </span>
                </div>
                <p className="text-center text-xs text-gray-500 sm:text-right">
                    © 2026 FitLog · Workout Library · Train hard, log honestly.
                </p>

            </div> </footer>
    );
};

export default Footer;