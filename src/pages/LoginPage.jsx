import React, { useState } from 'react'
import SocialNavbarComp from '../common/socialNavbar/SocialNavbarComp'
import HeaderComp from '../common/HeaderComponent/HeaderComp'
import FooterComp from '../common/FooterComponent/FooterComp'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import FormComponent from '../components/FormComponent/FormComponent';
import { Navigate } from 'react-router-dom';

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleLogin = async (email, password) => {
        setError(null);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Inicio de sesión exitoso");
            Navigate('/profile');
        } catch (error) {
            console.error(error);
            setError("Error to init sesión");
        }
    };

    return (
        <>
            <SocialNavbarComp></SocialNavbarComp>
            <HeaderComp></HeaderComp>
            <main className='container mx-auto flex'>
                <FormComponent title="Login" handleSubmit={handleLogin} error={error} />
            </main>
            <SocialNavbarComp></SocialNavbarComp>
            <FooterComp></FooterComp>
        </>
    )
}
