import React from 'react'
import './InspirationComp.css'


export default function InspirationComp() {
    const imageUrls = [
        'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1519148246701-3dc1897a7a21?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1677619680553-732e8e153db2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1643049439874-485bef80dde7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHJlY2lwZXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1570112686309-69f7b934fe41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHJlY2lwZXxlbnwwfHwwfHx8MA%3D%3D'
    ];
    return (
        <>
            <h2 className="text-center text-2xl font-bold my-10">inspiration</h2>

            <div className='grid md:grid-cols-2 gap-4 xl:grid-cols-3' id="inspiration">
                {imageUrls.map((url, index) => (
                    <a href="#"
                        key={index}
                        className="h-64 bg-cover bg-center rounded-box relative "
                        style={{ backgroundImage: `url(${url})` }}
                    >
                        <h3 className='absolute bottom-0 left-0 w-full text-white text-center bg-black bg-opacity-50 py-2'>Recipe inspiration</h3>
                    </a>
                ))}
            </div>
        </>
    )
}
