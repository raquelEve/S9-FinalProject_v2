import React, { useEffect } from 'react';
import './Parallax.css';

const Parallax = () => {
    useEffect(() => {
        const handleScroll = () => {
            const parallax = document.getElementById('parallax');
            const rect = parallax.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                parallax.classList.add('show');
            } else {
                parallax.classList.remove('show');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="parallax" className='lg:h-[500px] h-[300px]'>
            <div>
                <p id="parallax-text1" className="parallax-text  text-[32px] capitalice text-white font-bold font-playwriteBold">Find</p>
                <p id="parallax-text2" className="parallax-text delayed capitalize text-[32px] text-white font-bold font-playwriteBold">delicious recipes</p>
            </div>
        </div>
    );
};

export default Parallax;
