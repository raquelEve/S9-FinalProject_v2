import { useState } from 'react'
import SocialNavbarComp from '../common/socialNavbar/SocialNavbarComp'
import HeaderComp from '../common/HeaderComponent/HeaderComp'
import FooterComp from '../common/FooterComponent/FooterComp'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from "../firebase"
import FormComponent from '../components/FormComponent/FormComponent';
import { Navigate } from 'react-router-dom';

export default function RegisterPage() {

    const [error, setError] = useState(null);

    const handleRegister = async (email, password, username) => {
        setError(null);

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            await signInWithEmailAndPassword(auth, email, password);
            await updateProfile(auth.currentUser, { displayName: username });
            console.log('Usuario registrado y perfil actualizado');
            Navigate('/profile')
        } catch (error) {
            console.error(error);
            setError('Error al registrar usuario');
        }

    };


    return (
        <>
            <SocialNavbarComp></SocialNavbarComp>
            <HeaderComp></HeaderComp>
            <main className='container mx-auto flex'>
                <FormComponent title="Register" handleSubmit={handleRegister} error={error} />
            </main>
            <SocialNavbarComp></SocialNavbarComp>
            <FooterComp></FooterComp>
        </>
    )
}
