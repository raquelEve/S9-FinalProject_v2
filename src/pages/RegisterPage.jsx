import React, { useState } from 'react';
import SocialNavbarComp from '../common/socialNavbar/SocialNavbarComp';
import HeaderComponent from '../common/HeaderComponent/HeaderComponent';
import FooterComp from '../common/FooterComponent/FooterComp';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from "../firebase";
import FormComponent from '../components/FormComponent/FormComponent';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/userSlice';

export default function RegisterPage() {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = async (email, password, username) => {
        setError(null);

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await updateProfile(user, { displayName: username });
            dispatch(loginUser({ uid: user.uid, email: user.email, displayName: username }));
            console.log('Usuario registrado y perfil actualizado');
            navigate('/profile');
        } catch (error) {
            console.error(error);
            setError('Error al registrar usuario');
        }
    };

    return (
        <>
            <SocialNavbarComp></SocialNavbarComp>
            <HeaderComponent></HeaderComponent>
            <main className='container mx-auto flex flex-col'>
                <FormComponent title="Register" handleSubmit={handleRegister} error={error} />
                <Link to='/login' className='text-red mb-[200px] text-center hover:text-[#f59d49]'>¿No tienes cuenta?</Link>
            </main>
            <SocialNavbarComp></SocialNavbarComp>
            <FooterComp></FooterComp>
        </>
    );
}
