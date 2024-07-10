import React from 'react'
import { Link } from 'react-router-dom'
import './Areacard.css'

export default function AreaCard({ area }) {
    return (
        <Link
            to={`/recipes/area/${area.area}`}
            key={area.id}
            className="area-card relative h-64 w-full bg-cover bg-center rounded-box flex items-center justify-center mb-8 shadow-lg "
            style={{ backgroundImage: `url(${area.src})` }}
        >
            {/* overlay para el texto */}
            <div className="absolute inset-0 bg-black opacity-25 rounded-box hover:shadow-inner"></div>
            <h2 className="relative text-white text-3xl font-bold">{area.countryName}</h2>
            <div className='flat-area absolute h-[34px] w-[34px] top-3 right-3 bg-no-repeat bg-top bg-left'
                style={{ backgroundImage: `url(${area.flat})` }}></div>
        </Link>
    )
}
