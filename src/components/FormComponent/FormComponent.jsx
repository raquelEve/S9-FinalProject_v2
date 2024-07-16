import React, { useState } from 'react';
import './FormComponent.css'

export default function FormComponent({ title, handleSubmit, error }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(email, password, username);
    };

    return (
        <div className='card-form card card-compact bg-base-100 min-w-[300px] md:min-w-[400px] shadow-xl border p-8 mx-auto mt-[120px] '>
            <h2 className='text-center text-2xl font-bold mb-10'>{title}</h2>
            <form onSubmit={onSubmit} className='flex flex-col'>
                {title === "Register" &&
                    <input
                        type="text"
                        placeholder="Name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='mb-4 input input-bordered w-full max-w-xs'
                    />
                }
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='mb-4 input input-bordered w-full max-w-xs'
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='mb-4 input input-bordered w-full max-w-xs'
                />
                <button className="btn bg-[#b3db61] hover:bg-[#f59d49;] transition ease-in-out duration-300 delay-150" type='submit'>Send</button>
            </form>
            {error && <p className='text-red-500 text-center text-sm mt-4'>{error}</p>}
        </div>
    )
}
