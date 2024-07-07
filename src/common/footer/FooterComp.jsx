import React from 'react'

export default function FooterComp() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer>
                <div className='bg-neutral-500 text-white text-center'>
                    <p>© {currentYear} ñammmy - All rights reserved</p>
                </div>
            </footer>
        </>
    )
}
