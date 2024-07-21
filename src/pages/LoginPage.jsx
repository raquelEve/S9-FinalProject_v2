import { useState } from 'react'
import SocialNavbarComp from '../common/socialNavbar/SocialNavbarComp'
import HeaderComponent from '../common/HeaderComponent/HeaderComponent'
import FooterComp from '../common/FooterComponent/FooterComp'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import FormComponent from '../components/FormComponent/FormComponent';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/userSlice';


export default function LoginPage() {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (email, password) => {
        setError(null);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            dispatch(loginUser({ uid: user.uid, email: user.email, displayName: user.displayName }));
            console.log('Inicio de sesión exitoso');
            navigate('/profile');
        } catch (error) {
            console.error(error);
            setError("Error to init sesión");
        }
    };

    return (
        <>
            <SocialNavbarComp></SocialNavbarComp>
            <HeaderComponent></HeaderComponent>
            <main className='container mx-auto flex flex-col'>
                <FormComponent title="Login" handleSubmit={handleLogin} error={error} />
                <Link to='/register' className='text-red mb-[200px] text-center hover:text-[#f59d49]'>Do you have account?</Link>
            </main>
            <SocialNavbarComp></SocialNavbarComp>
            <FooterComp></FooterComp>
        </>
    )
}
