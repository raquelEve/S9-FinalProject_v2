import { useRef } from 'react';
import './Subscribe.css';
import emailjs from '@emailjs/browser';

export default function Subscribe() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE,
            form.current,
            import.meta.env.VITE_EMAIL_PUBLIC_KEY
        )
            .then((response) => {
                console.log('email correctamente!', response.status, response.text);
                form.current.reset();
            })
            .catch((error) => {
                console.error('Error al enviar email:', error.text);
            });
    };

    return (
        <div className='flex flex-col justify-center content-center my-10 mt-24' id="subscribe">
            <h3 className='text-center font-playwriteBold text-3xl mb-8'>Don&apos;t miss a single recipe!</h3>
            <p className='text-center mb-8'>
                Enjoy recipes and recommendations in your inbox!
            </p>
            <form ref={form} onSubmit={sendEmail}>
                <div className="join flex justify-center">
                    <input
                        type="email"
                        name="user_email"
                        placeholder='Email'
                        className="input input-bordered join-item rounded-l-full"
                        required
                    />
                    <button type="submit" className="btn join-item rounded-r-full">Subscribe</button>
                </div>
            </form>
        </div>
    );
}
