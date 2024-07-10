import React from 'react'
import { Link } from 'react-router-dom'
import './Areacard.css'

export default function AreaCard({ area }) {
    return (
        <div className='relative'>
            <Link
                to={`/recipes/area/${area.area}`}
                key={area.id}
                className="area-card relative h-64 w-full bg-cover bg-center rounded-box flex items-center justify-center mb-8 shadow-xl shadow-black-900"
                style={{ backgroundImage: `url(${area.src})` }}
            >
                {/* overlay para el texto */}
                <div className="absolute inset-0 bg-black opacity-25 rounded-box hover:shadow-inner"></div>
                <h2 className="relative text-white text-3xl font-bold">{area.countryName}</h2>
            </Link>
            <div className='flat-area absolute h-[34px] w-[34px] top-4 right-4 bg-no-repeat bg-top bg-left'
                style={{ backgroundImage: `url(${area.flat})` }}></div>
        </div>
    )
}
