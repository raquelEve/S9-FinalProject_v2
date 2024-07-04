import React from 'react'
import './Subscribe.css'

export default function Subscribe() {
    return (
        <div className='flex flex-col justify-center content-center my-10 mt-24' id="subscribe">
            <h3 className='text-center font-playwriteBold text-3xl mb-8'>Don&apos;t miss a single recipe!</h3>
            <p className='text-center mb-8'>
                Enjoy recipes and recommendations
                and recommendations in your inbox!</p>
            <form >
                <div className="join flex justify-center">
                    <input className="input input-bordered join-item rounded-l-full" placeholder="Email" />
                    <button className="btn join-item rounded-r-full">Subscribe</button>
                </div>
            </form>
        </div>
    )
}
