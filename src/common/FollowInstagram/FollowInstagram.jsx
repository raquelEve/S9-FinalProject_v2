import React from 'react';
import './FollowInstagram.css';

export default function FollowInstagram() {
    const imageUrls = [
        'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1519148246701-3dc1897a7a21?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1677619680553-732e8e153db2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1643049439874-485bef80dde7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHJlY2lwZXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1570112686309-69f7b934fe41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHJlY2lwZXxlbnwwfHwwfHx8MA%3D%3D'
    ];

    const repeatedImageUrls = [];
    const numberOfRepeats = 4;

    for (let i = 0; i < numberOfRepeats; i++) {
        repeatedImageUrls.push(...imageUrls);
    }

    return (
        <>
            <div className='flex relative bg-slate-700 mt-20 FollowInsta'>
                {repeatedImageUrls.map((url, index) => (
                    <div
                        key={index}
                        className="image-container"
                        style={{ backgroundImage: `url(${url})` }}
                    >
                    </div>
                ))}
                <a href="#" className='absolute text-black text-center bg-white bg-opacity-50 py-2 follow-button text-xl font-bold my-10 rounded-box shadow-lg'>Follow on Instagram</a>
            </div>
        </>
    );
}
